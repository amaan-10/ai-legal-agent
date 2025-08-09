"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

interface TypingMarkdownProps {
  content: string;
  className?: string;
  delayPerChunk?: number;
  chunkSize?: number;
}

export default function TypingMarkdown({
  content,
  className,
  delayPerChunk = 5,
  chunkSize = 4,
}: TypingMarkdownProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += chunkSize;
      setDisplayedText(content.slice(0, i));
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
      className={`prose prose-neutral max-w-none ${className}`}
    >
      <ReactMarkdown>{displayedText}</ReactMarkdown>
    </motion.div>
  );
}
