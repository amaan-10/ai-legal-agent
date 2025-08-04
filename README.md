# ⚖️ Nyayik – AI Legal Advisor

Nyayik is an **AI-powered legal advisory platform** that helps users get instant, intelligent, and context-aware legal insights.  
It supports answering legal queries, summarizing laws, providing case recommendations, and reviewing legal documents automatically.

---

## 🚀 Features

### 💬 AI Legal Chatbot
- Ask legal questions and receive accurate, context-aware answers.
- Supports **Indian laws**, legal procedures, and rights.
- Uses **LangChain + Vector Database** for semantic legal search.

### 📄 Automated Document Review
- Upload `.pdf`, `.doc`, `.docx`, `.txt` legal documents.
- AI reviews documents and provides:
  - 📄 **Summary**
  - 📜 **Key Clauses & Obligations**
  - ⚠ **Risks & Red Flags**
  - 📑 **Compliance Issues (Indian Law)**
  - 💡 **Recommended Actions**
- Works with **contracts, agreements, notices, court orders**.

### 🔍 Legal Case Recommendations
- Suggests relevant legal cases and precedents.
- Uses **vector search** to find similar judgments.

---

## 🛠️ Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org/) – React Framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Lucide Icons](https://lucide.dev/) – Icons

### **Backend**
- [Flask](https://flask.palletsprojects.com/) – Python backend API
- [LangChain](https://www.langchain.com/) – LLM orchestration
- [Pinecone](https://www.pinecone.io/) – Vector database
- [OpenAI / Gemini AI](https://platform.openai.com/) – AI models

### **Document Processing**
- **PyMuPDF** – PDF parsing
- **python-docx** – DOCX parsing
- **Tesseract / OCR** – Scanned document reading

---

## 📦 Installation

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/yourusername/nyayik.git
cd nyayik
