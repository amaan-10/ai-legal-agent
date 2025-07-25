"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const faqData = [
  {
    question: "What is an AI Legal Advisor?",
    answer: [
      "An AI Legal Advisor is a digital assistant powered by artificial intelligence that helps users understand legal concepts, draft documents, and receive legal guidance — without replacing a human lawyer. It leverages natural language processing and legal databases to provide relevant insights.",
    ],
  },
  {
    question: "Can an AI Legal Agent replace a human lawyer?",
    answer: [
      "No, AI Legal Agents are not a replacement for licensed legal professionals. They can automate routine tasks, provide initial legal support, and help draft documents, but complex legal issues still require human expertise and representation in court.",
    ],
  },
  {
    question: "Is my data safe with an AI Legal Assistant?",
    answer: [
      "Yes, trusted AI Legal Agents use secure encryption and follow strict compliance protocols (such as GDPR or HIPAA) to ensure your personal and legal data is protected. Always review the platform’s privacy policy and terms before sharing sensitive information.",
    ],
  },
  {
    question: "What legal tasks can an AI Legal Advisor handle?",
    answer: [
      "AI Legal Advisors can assist with: ",
      "Drafting contracts or agreements",
      "Answering legal queries",
      "Legal research and case law summarization",
      "Real-time compliance updates",
      "Monitoring changes in regulations",
      "They enhance productivity but always recommend consulting a lawyer for final review.",
    ],
  },
];

const FAQ = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    faqData.map((_, i) => i === 0)
  );

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const [parent] = useAutoAnimate({
    duration: 600,
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  });
  return (
    <section
      className="flex flex-col items-center justify-center bg-white gap-0 p-[90px_60px] w-full h-min overflow-hidden relative"
      data-framer-name="FAQ"
      id="faq"
    >
      <div
        className="flex flex-col items-center justify-center flex-none flex-nowrap gap-[60px] h-min overflow-hidden p-0 relative w-full"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col items-center justify-center flex-none flex-nowrap gap-6 h-min overflow-hidden p-0 relative w-min"
          data-framer-name="Heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 40,
              delay: 0,
              duration: 0.3,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex-none h-auto w-auto relative opacity-100 transform-none"
          >
            <span
              className="flex flex-row items-center justify-center gap-[10px] p-[7px_28px] w-min h-min overflow-hidden relative no-underline rounded-[30px] border-[1.5px] border-solid border-[rgb(243,243,241)] bg-[rgb(254,254,254)] opacity-100 shadow-none will-change-transform"
              data-border="true"
              data-framer-name="Label Section"
            >
              <div
                className="flex flex-row items-center justify-center flex-none gap-0 w-min h-min overflow-visible p-0 relative order-1 opacity-100"
                data-framer-name="Right"
              >
                <div
                  className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="text-[#37312f] text-base font-normal font-urbanist"
                    data-styles-preset="NFQi0OUa3"
                  >
                    Common Question
                  </p>
                </div>
              </div>
            </span>
          </motion.div>
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 0.2,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none flex-none h-auto w-auto relative whitespace-pre"
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="text-[52px] font-semibold text-[#111111] font-urbanist"
                data-styles-preset="o4SbqhkD9"
              >
                Frequently Asked Questions
              </h2>
            </motion.div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center flex-none flex-nowrap gap-5 h-min w-min max-w-[1018px] overflow-hidden p-0 relative"
          data-framer-name="Wrapper"
        >
          {faqData.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 0.4,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer rounded-[30px] w-[810px] overflow-hidden"
              style={
                openStates[index]
                  ? {
                      background:
                        "linear-gradient(180deg, #f3f3f1 52%, #fafaf7 100%)",
                      borderWidth: "1px",
                      borderColor: "#f3f3f1",
                    }
                  : { background: "transparent" }
              }
            >
              <div className="p-6 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold text-[#111111] font-urbanist">
                    {faq.question}
                  </h3>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    initial={false}
                    animate={{ rotate: openStates[index] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#616161"
                  >
                    <polyline
                      points="6 9 12 15 18 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>

                <div ref={parent}>
                  {openStates[index] && (
                    <div className="text-[#616161] text-lg font-normal">
                      <p>{faq.answer.slice(0, 1)}</p>
                      {faq.answer.length > 1 && (
                        <>
                          <ul className="list-disc pl-10 space-y-1 mt-2">
                            {faq.answer.slice(1, -1).map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>

                          <p className="mt-3">
                            {faq.answer[faq.answer.length - 1]}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
