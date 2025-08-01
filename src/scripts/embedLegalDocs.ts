import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
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
    modelName: "text-embedding-004",
  });

  const index = getPineconeIndex();

  const docsDir = path.join(process.cwd(), "src", "legal_docs");
  const files = fs.readdirSync(docsDir);

  for (const file of files) {
    console.log(`📄 Processing file: ${file}`);
    const text = fs.readFileSync(path.join(docsDir, file), "utf8");

    // ✅ Split large docs into chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000, // characters
      chunkOverlap: 200,
    });
    const chunks = await splitter.splitText(text);

    console.log(`   ➡️ Split into ${chunks.length} chunks`);

    let counter = 0;
    for (const chunk of chunks) {
      counter++;
      try {
        const vector = await embeddings.embedQuery(chunk);
        await index.upsert([
          {
            id: `${file}-${counter}`,
            values: vector,
            metadata: { source: file, text: chunk },
          },
        ]);
      } catch (err) {
        console.error(`❌ Error embedding chunk ${counter} of ${file}:`, err);
      }
    }
  }

  console.log("✅ All documents embedded successfully.");
}

run().catch((err) => {
  console.error("❌ Error embedding documents:", err);
});
