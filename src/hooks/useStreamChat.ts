import { useState } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export function useStreamChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const assistantData = await res.json();

      setMessages((prev) => [...prev, assistantData]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleFileSubmit(file: File, question: string) {
    if (!file || !question.trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", question);

    try {
      const res = await fetch("/api/chat/review", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const assistantData = await res.json();

      setMessages((prev) => [...prev, assistantData]);
    } catch (err) {
      console.error("File upload error:", err);
      setError("Something went wrong during document review.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInput(e.target.value);
  }

  function reload() {
    if (messages.length > 0) {
      handleSubmit();
    }
  }

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    handleFileSubmit,
    isLoading,
    error,
    reload,
  };
}
