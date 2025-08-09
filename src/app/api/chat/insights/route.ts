import { getPineconeIndex } from "@/lib/pinecone";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { genAI } from "@/lib/gemini";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];
    const question = lastMessage?.content;

    if (!question) {
      return new Response(JSON.stringify({ error: "No question provided" }), { status: 400 });
    }

    // 1️⃣ Create embeddings
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GEMINI_API_KEY!,
      modelName: "text-embedding-004",
    });
    const queryVector = await embeddings.embedQuery(question);

    // 2️⃣ Search Pinecone
    const index = getPineconeIndex();
    const search = await index.query({
      vector: queryVector,
      topK: 2,
      includeMetadata: true,
    });
    const context = search.matches.map((m) => m.metadata?.text).join("\n");

    // 3️⃣ Prepare Gemini prompt
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `You are an Indian Legal Advisor.
      Always answer in well-structured Markdown. Use:
      - ## headings
      - bullet points for lists
      - **bold** for key terms
      - > blockquotes for notes/disclaimers
      - blank line between sections
      Avoid long paragraphs. Keep it easy to read.

      Context:
      ${context}

      Question: ${question}
      Answer:`;

    // 4️⃣ Get full output (no streaming)
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // 5️⃣ Send full JSON back
    return new Response(
      JSON.stringify({
        id: nanoid(),
        role: "assistant",
        content: text,
        createdAt: new Date().toISOString(),
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (err) {
    console.error("Error in /api/chat/insights:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
