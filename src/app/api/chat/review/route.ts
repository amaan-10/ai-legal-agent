// /src/app/api/chat/review/route.ts
import { NextRequest, NextResponse } from "next/server";
import { genAI } from "@/lib/gemini";
import { nanoid } from "nanoid";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const question = formData.get("question") as string;

    if (!file || !question) {
      return NextResponse.json({ error: "Missing file or question." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name.toLowerCase();

    let documentText = "";

    // Parse based on file type
    if (fileName.endsWith(".pdf")) {
      const parsed = await pdfParse(buffer);
      documentText = parsed.text;
    } else if (fileName.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer });
      documentText = result.value;
    } else if (fileName.endsWith(".txt")) {
      documentText = buffer.toString("utf-8");
    } else {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    if (!documentText || documentText.trim().length < 50) {
      return NextResponse.json({ error: "Document is too short or empty." }, { status: 400 });
    }

    const prompt = `
      You are a Indian Legal Advisor. Carefully review the following legal document and answer the user's query using clear and structured Markdown formatting.

      ---
      ### 📄 Document:
      ${documentText}

      ---
      ### ❓ User's Question:
      ${question}

      ---
      ### ✅ Legal Review:`.trim();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({
      id: nanoid(),
      role: "assistant",
      content: responseText,
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("❌ Backend error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
