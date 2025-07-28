"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HowToUse = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-[10px] w-full px-5 md:px-[30px] lg:px-[60px] py-[90px] bg-[#fafaf7] overflow-visible h-min relative"
      data-framer-name="How To Use"
      id="how-to-use"
    >
      <div
        className="flex flex-col items-center justify-center gap-[60px] w-full max-w-[1228px] h-min overflow-visible p-0 relative"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col items-center justify-center gap-[24px] w-full h-min overflow-visible p-0 relative"
          data-framer-name="Tabs Heading"
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
                    className="text-[#37312f] text-[15px] lg:text-base font-normal font-urbanist"
                    data-styles-preset="NFQi0OUa3"
                  >
                    How to Use?
                  </p>
                </div>
              </div>
            </span>
          </motion.div>
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
            className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative lg:whitespace-pre opacity-100 transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <h2
              className="text-[33px] md:text-[43px] lg:text-[52px] font-urbanist font-semibold text-[#111111] text-center"
              data-styles-preset="o4SbqhkD9"
            >
              Simple Steps to Get Started
            </h2>
          </motion.div>
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
            viewport={{ once: true, amount: 0.6 }}
            className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full max-w-[650px] relative whitespace-pre-wrap break-words opacity-100 transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="font-normal text-base lg:text-lg text-[#616161] text-center"
              data-styles-preset="UCvrJxnzN"
            >
              Experience CRM at its finest with smooth integration, insightful
              analytics, and a user experience built for the future.
            </p>
          </motion.div>
        </div>
        <div
          className="flex flex-row flex-wrap lg:flex-nowrap items-start justify-center gap-6 lg:gap-[32px] w-full h-min overflow-visible p-0 relative"
          data-framer-name="Content"
        >
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 0.6,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex-none lg:flex-[1_0_0px] h-auto w-full md:w-[44%] lg:w-[1px] relative"
            >
              <div
                className="flex flex-col items-center justify-center gap-[10px] w-full h-min p-[4px] relative overflow-visible rounded-[31px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.07)] bg-white opacity-100"
                data-framer-name="Mobile"
              >
                <div
                  data-border="true"
                  data-framer-name="Content"
                  className="flex flex-col items-start justify-center gap-[24px] w-full h-min p-[28px_24px_24px] relative overflow-visible rounded-[28px] opacity-100"
                  style={{
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(243, 243, 241)",
                    background:
                      "linear-gradient(rgb(255, 255, 255) 50%, rgb(246, 244, 242) 100%)",
                  }}
                >
                  <div
                    className="flex flex-row flex-nowrap items-center justify-between w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Image &amp; Text"
                  >
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative overflow-visible whitespace-pre opacity-100 transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-sm font-normal text-[#989897]"
                        data-styles-preset="U3auStWhB"
                      >
                        Step 1
                      </p>
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[10px] w-[60px] h-[60px] relative overflow-visible p-0 rounded-[200px] opacity-100 flex-none"
                      style={{
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRightWidth: "1px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgb(248, 249, 250)",
                        background:
                          "radial-gradient(62% 35% at 50% 50%, rgb(240, 236, 231) 0%, rgb(255, 255, 255) 99.66216216216216%)",
                      }}
                      data-border="true"
                      data-framer-name="Image"
                    >
                      <div
                        className="flex-none w-[24px] h-[24px] relative overflow-visible rounded-[3px] opacity-100"
                        data-framer-name="Icon"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          className="absolute inset-0 rounded-inherit"
                        >
                          <Image
                            decoding="async"
                            sizes="24px"
                            src="https://framerusercontent.com/images/6Ki9cwTPG86ial0WmNnAUWPvo.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="block w-full h-full rounded-inherit object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-none flex-nowrap items-start justify-center gap-[10px] w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Title And Description"
                  >
                    <div
                      data-framer-component-type="RichTextContainer"
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                    >
                      <h3
                        className="font-urbanist text-2xl font-semibold text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        Sign Up
                      </h3>
                    </div>
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-lg font-normal text-[#616161]"
                        data-styles-preset="UCvrJxnzN"
                      >
                        Create your secure legal workspace—no credit card
                        required, just quick onboarding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 0.8,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex-none lg:flex-[1_0_0px] h-auto w-full md:w-[44%] lg:w-[1px] relative"
            >
              <div
                className="flex flex-col items-center justify-center gap-[10px] w-full h-min p-[4px] relative overflow-visible rounded-[31px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.07)] bg-white opacity-100"
                data-framer-name="Mobile"
              >
                <div
                  data-border="true"
                  data-framer-name="Content"
                  className="flex flex-col items-start justify-center gap-[24px] w-full h-min p-[28px_24px_24px] relative overflow-visible rounded-[28px] opacity-100"
                  style={{
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(243, 243, 241)",
                    background:
                      "linear-gradient(rgb(255, 255, 255) 50%, rgb(246, 244, 242) 100%)",
                  }}
                >
                  <div
                    className="flex flex-row items-center justify-between w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Image &amp; Text"
                  >
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative overflow-visible whitespace-pre opacity-100 transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-sm font-normal text-[#989897]"
                        data-styles-preset="U3auStWhB"
                      >
                        Step 2
                      </p>
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[10px] w-[60px] h-[60px] relative overflow-visible p-0 rounded-[200px] opacity-100 flex-none"
                      style={{
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRightWidth: "1px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgb(248, 249, 250)",
                        background:
                          "radial-gradient(62% 35% at 50% 50%, rgb(240, 236, 231) 0%, rgb(255, 255, 255) 99.66216216216216%)",
                      }}
                      data-border="true"
                      data-framer-name="Image"
                    >
                      <div
                        className="flex-none w-[24px] h-[24px] relative overflow-visible rounded-[3px] opacity-100"
                        data-framer-name="Icon"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          className="absolute inset-0 rounded-inherit"
                        >
                          <Image
                            decoding="async"
                            sizes="24px"
                            src="https://framerusercontent.com/images/FfAsBbQEx59wSqImpL7iOB2EQ6I.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="block w-full h-full rounded-inherit object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-none flex-nowrap items-start justify-center gap-[10px] w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Title And Description"
                  >
                    <div
                      data-framer-component-type="RichTextContainer"
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                    >
                      <h3
                        className="font-urbanist text-2xl font-semibold text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        Upload Legal Documents
                      </h3>
                    </div>
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-lg font-normal text-[#616161]"
                        data-styles-preset="UCvrJxnzN"
                      >
                        Import contracts for instant AI review and smart
                        sorting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 1,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex-none lg:flex-[1_0_0px] h-auto w-full md:w-[44%] lg:w-[1px] relative"
            >
              <div
                className="flex flex-col items-center justify-center gap-[10px] w-full h-min p-[4px] relative overflow-visible rounded-[31px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.07)] bg-white opacity-100"
                data-framer-name="Mobile"
              >
                <div
                  data-border="true"
                  data-framer-name="Content"
                  className="flex flex-col items-start justify-center gap-[24px] w-full h-min p-[28px_24px_24px] relative overflow-visible rounded-[28px] opacity-100"
                  style={{
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(243, 243, 241)",
                    background:
                      "linear-gradient(rgb(255, 255, 255) 50%, rgb(246, 244, 242) 100%)",
                  }}
                >
                  <div
                    className="flex flex-row items-center justify-between w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Image &amp; Text"
                  >
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative overflow-visible whitespace-pre opacity-100 transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-sm font-normal text-[#989897]"
                        data-styles-preset="U3auStWhB"
                      >
                        Step 3
                      </p>
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[10px] w-[60px] h-[60px] relative overflow-visible p-0 rounded-[200px] opacity-100 flex-none"
                      style={{
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRightWidth: "1px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgb(248, 249, 250)",
                        background:
                          "radial-gradient(62% 35% at 50% 50%, rgb(240, 236, 231) 0%, rgb(255, 255, 255) 99.66216216216216%)",
                      }}
                      data-border="true"
                      data-framer-name="Image"
                    >
                      <div
                        className="flex-none w-[24px] h-[24px] relative overflow-visible rounded-[3px] opacity-100"
                        data-framer-name="Icon"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          className="absolute inset-0 rounded-inherit"
                        >
                          <Image
                            decoding="async"
                            sizes="24px"
                            src="https://framerusercontent.com/images/XZhBEU1cYeG2aTGlI240qGk4rQ.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="block w-full h-full rounded-inherit object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-none flex-nowrap items-start justify-center gap-[10px] w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Title And Description"
                  >
                    <div
                      data-framer-component-type="RichTextContainer"
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                    >
                      <h3
                        className="font-urbanist text-2xl font-semibold text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        Automate Workflows
                      </h3>
                    </div>
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-lg font-normal text-[#616161]"
                        data-styles-preset="UCvrJxnzN"
                      >
                        Smart risk alerts, tailored templates, and compliance
                        reminders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                delay: 1.2,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex-none lg:flex-[1_0_0px] h-auto w-full md:w-[44%] lg:w-[1px] relative"
            >
              <div
                className="flex flex-col items-center justify-center gap-[10px] w-full h-min p-[4px] relative overflow-visible rounded-[31px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.07)] bg-white opacity-100"
                data-framer-name="Mobile"
              >
                <div
                  data-border="true"
                  data-framer-name="Content"
                  className="flex flex-col items-start justify-center gap-[24px] w-full h-min p-[28px_24px_24px] relative overflow-visible rounded-[28px] opacity-100"
                  style={{
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(243, 243, 241)",
                    background:
                      "linear-gradient(rgb(255, 255, 255) 50%, rgb(246, 244, 242) 100%)",
                  }}
                >
                  <div
                    className="flex flex-row items-center justify-between w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Image &amp; Text"
                  >
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative overflow-visible whitespace-pre opacity-100 transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-sm font-normal text-[#989897]"
                        data-styles-preset="U3auStWhB"
                      >
                        Done 🎉
                      </p>
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[10px] w-[60px] h-[60px] relative overflow-visible p-0 rounded-[200px] opacity-100 flex-none"
                      style={{
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRightWidth: "1px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgb(248, 249, 250)",
                        background:
                          "radial-gradient(62% 35% at 50% 50%, rgb(240, 236, 231) 0%, rgb(255, 255, 255) 99.66216216216216%)",
                      }}
                      data-border="true"
                      data-framer-name="Image"
                    >
                      <div
                        className="flex-none w-[24px] h-[24px] relative overflow-visible rounded-[3px] opacity-100"
                        data-framer-name="Icon"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          className="absolute inset-0 rounded-inherit"
                        >
                          <Image
                            decoding="async"
                            sizes="24px"
                            src="https://framerusercontent.com/images/tfcVgiqphHMsEjrAWgTbTRLC8Q.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="block w-full h-full rounded-inherit object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-none flex-nowrap items-start justify-center gap-[10px] w-full h-min overflow-visible p-0 relative"
                    data-framer-name="Title And Description"
                  >
                    <div
                      data-framer-component-type="RichTextContainer"
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                    >
                      <h3
                        className="font-urbanist text-2xl font-semibold text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        AI Legal Agent in Action
                      </h3>
                    </div>
                    <div
                      className="outline-none flex flex-col justify-start flex-shrink-0 flex-none transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-lg font-normal text-[#616161]"
                        data-styles-preset="UCvrJxnzN"
                      >
                        Let the AI handle legal ops so you can focus on
                        high-impact work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
