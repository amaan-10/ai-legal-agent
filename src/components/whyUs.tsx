"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-6 w-full min-h-0 px-5 md:px-[30px] lg:px-[60px] py-[90px]"
      style={{
        backgroundColor: "#fafaf7",
      }}
      data-framer-name="Why Choose Us"
      id="why-choose-us"
    >
      <div
        className="flex flex-col lg:flex-row flex-nowrap items-center lg:items-start justify-center gap-[60px] w-full max-w-[1228px] relative overflow-visible"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col flex-nowrap flex-1 gap-6 h-min justify-center items-center lg:items-start content-start max-w-full lg:max-w-[530px] overflow-visible p-0 relative lg:w-px z-[1]"
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
                    Why Choose Us?
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
              className="outline-none  flex flex-col justify-start items-center lg:items-start flex-shrink-0 flex-none  h-auto w-full  relative  whitespace-pre-wrap  break-words  opacity-100"
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="text-[33px] md:text-[43px] lg:text-[52px] font-semibold text-[#111111] font-urbanist text-center lg:text-left"
                data-styles-preset="o4SbqhkD9"
              >
                Your Trusted AI Legal Partner for Every Case
              </h2>
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
                delay: 0.4,
                duration: 0.3,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="outline-none flex flex-col justify-start items-center lg:items-start flex-shrink-0 opacity-100 transform-none flex-none h-auto relative whitespace-pre-wrap w-full max-w-full md:max-w-[500px] lg:max-w-full break-words"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="text-base lg:text-lg text-[#616161] font-normal text-center lg:text-left"
                data-styles-preset="UCvrJxnzN"
              >
                We deliver intelligent legal support customized to your specific
                needs—accurate, fast, and always available.
              </p>
            </motion.div>
          </div>
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
            className="flex flex-none flex-row flex-wrap items-center content-center justify-center lg:justify-start gap-5 md:gap-[27px] h-min w-full relative overflow-visible py-3 opacity-100"
            data-framer-name="Counter Wrapper"
          >
            <div className="contents">
              <div
                className="flex-none h-auto relative w-[80px] md:w-[100px]"
                data-framer-name="Counter"
              >
                <div
                  className="flex flex-col flex-nowrap items-center justify-center gap-[3px] h-min w-full overflow-hidden p-0 relative opacity-100"
                  data-framer-name="Default"
                >
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative w-full h-auto whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <h3
                      className="font-semibold font-urbanist text-[28px] md:text-4xl text-[#37312f]"
                      data-styles-preset="ywPM9lqZT"
                    >
                      100k+
                    </h3>
                  </div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative h-auto w-full whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="text-base lg:text-lg font-normal text-[#616161]"
                      data-styles-preset="UCvrJxnzN"
                    >
                      Positive Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex-none h-auto overflow-hidden relative w-px"
              style={{
                background: `linear-gradient(0deg, 
      var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, #fafaf7) 0%, 
      var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24, rgb(240, 236, 231)) 23.972%, 
      var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24, rgb(240, 236, 231)) 75.826%, 
      var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(250, 250, 247)) 100%)`,
              }}
              data-framer-name="Divider"
            ></div>
            <div className="contents">
              <div
                className="flex-none h-auto relative w-[80px] md:w-[100px]"
                data-framer-name="Counter"
              >
                <div
                  className="flex flex-col flex-nowrap items-center justify-center gap-[3px] h-min w-full overflow-hidden p-0 relative opacity-100"
                  data-framer-name="Default"
                >
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative w-full h-auto whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <h3
                      className="font-semibold font-urbanist text-[28px] md:text-4xl text-[#37312f]"
                      data-styles-preset="ywPM9lqZT"
                    >
                      78k+
                    </h3>
                  </div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative h-auto w-full whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="text-base lg:text-lg font-normal text-[#616161]"
                      data-styles-preset="UCvrJxnzN"
                    >
                      Users Satisfied
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex-none h-auto overflow-hidden relative w-px"
              style={{
                background: `linear-gradient(0deg, 
      var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, #fafaf7) 0%, 
      var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24, rgb(240, 236, 231)) 23.972%, 
      var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24, rgb(240, 236, 231)) 75.826%, 
      var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(250, 250, 247)) 100%)`,
              }}
              data-framer-name="Divider"
            ></div>
            <div className="contents">
              <div
                className="flex-none h-auto relative w-[80px] md:w-[100px]"
                data-framer-name="Counter"
              >
                <div
                  className="flex flex-col flex-nowrap items-center justify-center gap-[3px] h-min w-full overflow-hidden p-0 relative opacity-100"
                  data-framer-name="Default"
                >
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative w-full h-auto whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <h3
                      className="font-semibold font-urbanist text-[28px] md:text-4xl text-[#37312f]"
                      data-styles-preset="ywPM9lqZT"
                    >
                      4.9/5
                    </h3>
                  </div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none relative h-auto w-full whitespace-pre-wrap break-words opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="text-base lg:text-lg font-normal text-[#616161]"
                      data-styles-preset="UCvrJxnzN"
                    >
                      Overall Ratings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div
          className="flex flex-col md:flex-row lg:flex-col flex-[1_0_0px] flex-nowrap items-center content-center justify-center gap-8 h-min overflow-visible p-0 relative w-full lg:w-px"
          data-framer-name="Wrapper"
        >
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
            className="flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] p-1 w-full md:w-px lg:w-full h-min relative flex-[1_0_0px] lg:flex-none rounded-[31px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)]"
            data-framer-name="Card"
          >
            <div
              className="flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] p-[45px_38px] w-[1px] h-min relative flex-[1_0_0px] rounded-[28px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg,#ffffff 50%,rgb(248,249,250) 100%)",
                borderWidth: "1px",
                borderColor: "#f8f9fa",
                borderStyle: "solid",
                willChange: "transform",
              }}
              data-border="true"
              data-framer-name="Background"
            >
              <div
                className="flex flex-col flex-nowrap items-center content-center justify-center gap-2 p-0 w-[1px] h-min overflow-hidden relative flex-[1_0_0px]"
                data-framer-name="Content"
              >
                <div
                  className="flex flex-row flex-nowrap items-center content-center justify-center gap-4 p-0 w-full h-min overflow-visible relative flex-none"
                  data-framer-name="Text & Icon"
                >
                  <div
                    className="flex flex-col flex-nowrap items-center content-center justify-center gap-[10px] w-[36px] h-[36px] p-0 rounded-[27px] overflow-hidden relative flex-none will-change-transform"
                    data-framer-name="Icon"
                  >
                    <div
                      className="w-[31px] h-[31px] rounded-[4px] flex-none overflow-visible relative"
                      data-framer-name="Icon"
                    >
                      <div
                        className="absolute inset-0"
                        data-framer-background-image-wrapper="true"
                      >
                        <Image
                          decoding="async"
                          src="https://framerusercontent.com/images/bg2WQbID1imnq0RJkmrjT86E.svg"
                          alt=""
                          width={32}
                          height={32}
                          className="block w-full h-full rounded-inherit object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-[1_0_0px] items-center justify-center gap-[10px] overflow-visible p-0 relative w-px h-min"
                    data-framer-name="Title And Description"
                  >
                    <div
                      className="outline-none flex flex-col justify-start shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-name="Title"
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="text-[20px] md:text-[22px] lg:text-2xl font-semibold font-urbanist text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        Smart Legal Automation
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="outline-none flex flex-col justify-start shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words"
                  data-framer-name="Title"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="text-base lg:text-lg font-normal text-[#616161]"
                    data-styles-preset="UCvrJxnzN"
                  >
                    Streamline legal research, document drafting, and compliance
                    checks with AI-powered automation to save time and reduce
                    errors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] p-1 w-full md:w-px lg:w-full h-min relative flex-[1_0_0px] lg:flex-none rounded-[31px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)]"
            data-framer-name="Card"
          >
            <div
              className="flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] p-[45px_38px] w-[1px] h-min relative flex-[1_0_0px] rounded-[28px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg,#ffffff 50%,rgb(248,249,250) 100%)",
                borderWidth: "1px",
                borderColor: "#f8f9fa",
                borderStyle: "solid",
                willChange: "transform",
              }}
              data-border="true"
              data-framer-name="Background"
            >
              <div
                className="flex flex-col flex-nowrap items-center content-center justify-center gap-2 p-0 w-[1px] h-min overflow-hidden relative flex-[1_0_0px]"
                data-framer-name="Content"
              >
                <div
                  className="flex flex-row flex-nowrap items-center content-center justify-center gap-4 p-0 w-full h-min overflow-visible relative flex-none"
                  data-framer-name="Text & Icon"
                >
                  <div
                    className="flex flex-col flex-nowrap items-center content-center justify-center gap-[10px] w-[36px] h-[36px] p-0 rounded-[27px] overflow-hidden relative flex-none will-change-transform"
                    data-framer-name="Icon"
                  >
                    <div
                      className="w-[31px] h-[31px] rounded-[4px] flex-none overflow-visible relative"
                      data-framer-name="Icon"
                    >
                      <div
                        className="absolute inset-0"
                        data-framer-background-image-wrapper="true"
                      >
                        <Image
                          decoding="async"
                          src="https://framerusercontent.com/images/R1V5Ouyt1mqLeFYe2hWYXnNn6RU.svg"
                          alt=""
                          width={32}
                          height={32}
                          className="block w-full h-full rounded-inherit object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-[1_0_0px] items-center justify-center gap-[10px] overflow-visible p-0 relative w-px h-min"
                    data-framer-name="Title And Description"
                  >
                    <div
                      className="outline-none flex flex-col justify-start shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words"
                      data-framer-name="Title"
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="text-[20px] md:text-[22px] lg:text-2xl font-semibold font-urbanist text-[#111111]"
                        data-styles-preset="mnefNh2fC"
                      >
                        Mobile-First Legal Assistance
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="outline-none flex flex-col justify-start shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words"
                  data-framer-name="Title"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="text-base lg:text-lg font-normal text-[#616161]"
                    data-styles-preset="UCvrJxnzN"
                  >
                    Manage consultations, track case updates, and review
                    documents on the go with a seamless, mobile-optimized
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
