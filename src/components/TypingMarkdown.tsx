"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface TypingMarkdownProps {
  content: string;
  delayPerChar?: number;
}

export default function TypingMarkdown({
  content,
  delayPerChar = 0.015,
}: TypingMarkdownProps) {
  const lines = content.split("\n");

  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        // Animate paragraph character-by-character
        return (
          <motion.div
            key={index}
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: delayPerChar } },
            }}
          >
            {line.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
}
