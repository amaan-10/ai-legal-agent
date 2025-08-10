<!-- # ⚖️ Nyayik – AI Legal Advisor -->

<div align="center">
  <img src="public/images/Nyāyik.png" width="200" height="200"/>
  
</div>

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
```

### **2️⃣ Install Frontend Dependencies**
```bash
cd frontend
npm install
```
### **3️⃣ Install Backend Dependencies**
```bash
cd backend
pip install -r requirements.txt
```
### **4️⃣ Set Environment Variables**
Create a .env file in both frontend and backend with:
```bash
OPENAI_API_KEY=your_openai_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_ENVIRONMENT=gcp-starter
```
### **5️⃣ Run Backend**
```bash
cd backend
python app.py
```
### **6️⃣ Run Frontend**
```bash
cd frontend
npm run dev
```
---

## 📂 Project Structure
```
nyayik/
│
├── frontend/               # Next.js Frontend
│   ├── components/         # React Components
│   ├── pages/              # Next.js Pages
│   ├── styles/             # Tailwind Styles
│
├── backend/                # Flask Backend
│   ├── app.py              # API Entry Point
│   ├── routes/             # API Routes
│   ├── services/           # LangChain, Pinecone Services
│
├── README.md               # Project Documentation
```
---

## 📖 Usage
### Ask Legal Questions
- Open chatbot.

- Type your question, e.g., "What are the legal rights of a tenant in India?".

- Receive AI-generated advice instantly.

### Review Legal Documents
- Click Upload Document.

- Select .pdf, .doc, .docx, or .txt file.

- AI analyzes and returns:

  - Summary

  - Key clauses

  - Risks & compliance checks

  - Suggested actions

---

## 🛡️ Disclaimer
Nyayik is not a substitute for professional legal advice.
The information provided is for educational and informational purposes only.
Always consult a qualified lawyer for legal matters.
