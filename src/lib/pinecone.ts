import path from "path";
import dotenv from "dotenv";

// ✅ Always load env before creating Pinecone client
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { Pinecone } from "@pinecone-database/pinecone";

if (!process.env.PINECONE_API_KEY) {
  throw new Error("❌ PINECONE_API_KEY is missing in .env.local");
}

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export const getPineconeIndex = () => {
  if (!process.env.PINECONE_INDEX) {
    throw new Error("❌ PINECONE_INDEX is missing in .env.local");
  }
  return pinecone.Index(process.env.PINECONE_INDEX!);
};
