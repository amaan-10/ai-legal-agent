import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeStore } from "@langchain/pinecone";
import { getPineconeIndex } from "../lib/pinecone";

async function run() {
  if (!process.env.PINECONE_API_KEY) {
    throw new Error("❌ Missing PINECONE_API_KEY in .env.local");
  }
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("❌ Missing GEMINI_API_KEY in .env.local");
  }

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY!,
    modelName: "gemini-embedding-001",
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

    // ✅ Create LangChain 'Document' objects instead of raw strings.
    // This allows us to pass metadata directly into the vector store.
    const docs = await splitter.createDocuments(
      [text],
      [{ source: file }], // Injects the filename into the metadata of every chunk
    );

    console.log(`   ➡️ Split into ${docs.length} chunks. Batch uploading...`);

    try {
      // ✅ PineconeStore automatically batches the embeddings and upserts!
      await PineconeStore.fromDocuments(docs, embeddings, {
        pineconeIndex: index,
      });
      console.log(`   ✅ Successfully embedded and uploaded ${file}`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }

  console.log("🎉 All documents embedded successfully.");
}

run().catch((err) => {
  console.error("❌ Error embedding documents:", err);
});
// to run this script, use: `npx tsx src/scripts/embedLegalDocs.ts`
