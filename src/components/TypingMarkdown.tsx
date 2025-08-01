"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

interface TypingMarkdownProps {
  content: string;
  delayPerChunk?: number; // ms per chunk
  chunkSize?: number; // characters revealed per step
}

export default function TypingMarkdown({
  content,
  delayPerChunk = 5, // super fast
  chunkSize = 4, // reveal 4 chars at a time
}: TypingMarkdownProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += chunkSize;
      setDisplayedText(content.slice(0, i)); // ✅ take from start → no skipping
      if (i >= content.length) {
        clearInterval(interval);
      }
    }, delayPerChunk);

    return () => clearInterval(interval);
  }, [content, chunkSize, delayPerChunk]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="prose prose-neutral max-w-none"
    >
      <ReactMarkdown>{displayedText}</ReactMarkdown>
    </motion.div>
  );
}
