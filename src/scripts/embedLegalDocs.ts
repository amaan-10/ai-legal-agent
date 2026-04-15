import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getPineconeIndex } from "../lib/pinecone";

// 🕒 Utility function to pause execution
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  if (!process.env.PINECONE_API_KEY) {
    throw new Error("❌ Missing PINECONE_API_KEY in .env.local");
  }
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("❌ Missing GEMINI_API_KEY in .env.local");
  }

  // maxConcurrency: 1 prevents LangChain from sending parallel requests
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY!,
    modelName: "gemini-embedding-001",
    maxConcurrency: 1,
  });

  const index = getPineconeIndex();

  const docsDir = path.join(process.cwd(), "src", "legal_docs");
  const files = fs.readdirSync(docsDir);

  for (const file of files) {
    console.log(`📄 Processing file: ${file}`);
    const text = fs.readFileSync(path.join(docsDir, file), "utf8");

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 200,
    });

    const docs = await splitter.createDocuments([text], [{ source: file }]);

    console.log(`   ➡️ Split into ${docs.length} chunks.`);

    // 🚨 Drastically reduced batch size to stay under the 100 RPM limit
    const batchSize = 60;

    for (let i = 0; i < docs.length; i += batchSize) {
      const batch = docs.slice(i, i + batchSize);
      const texts = batch.map((doc) => doc.pageContent);

      try {
        console.log(
          `   ⏳ Requesting embeddings for chunks ${i + 1} to ${Math.min(i + batchSize, docs.length)}...`,
        );

        const vectors = await embeddings.embedDocuments(texts);

        if (!vectors || vectors.length === 0 || vectors[0].length === 0) {
          console.error(
            `🚨 ERROR: API returned empty vectors. RPM limit likely hit.`,
          );
          break;
        }

        const pineconeRecords = batch.map((doc, idx) => ({
          id: `${file}-chunk-${i + idx}`,
          values: vectors[idx],
          metadata: {
            source: doc.metadata.source,
            text: doc.pageContent,
          },
        }));

        await index.upsert(pineconeRecords);
        console.log(`      ✓ Successfully pushed to Pinecone.`);

        // 🛑 The Magic Sauce: Force the script to wait 60 seconds before the next batch
        if (i + batchSize < docs.length) {
          console.log(
            `   ⏱️  Waiting 60 seconds for API RPM limit to reset...`,
          );
          await sleep(60000);
        }
      } catch (err: any) {
        console.error(`❌ Detailed Error:`, err?.message || err);
        break;
      }
    }
    console.log(`   ✅ Finished processing ${file}\n`);
  }

  console.log("🎉 All documents processed.");
}

run().catch((err) => {
  console.error("❌ Fatal Error:", err);
});
