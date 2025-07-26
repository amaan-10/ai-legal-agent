"use client";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <main className=" min-h-[100vh] w-full relative flex flex-col flex-nowrap items-center justify-start gap-0 h-min overflow-visible bg-[#fefefe]">
        <Header />
        <section
          className="flex flex-col flex-none items-center place-content-center gap-[10px] overflow-hidden p-[120px_60px_60px] relative w-full h-min z-[3] mt-5"
          data-framer-name="Contact"
          id="contact"
        >
          <div
            className="flex flex-col flex-none items-center gap-[90px] h-min max-w-[1080px] overflow-visible p-0 relative w-full"
            data-framer-name="Container"
          >
            <div
              className="flex flex-col items-center justify-center gap-6 w-full h-min overflow-hidden p-0 relative"
              data-framer-name="Heading"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 210, damping: 70 }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex-none h-auto w-auto relative opacity-100"
              >
                <span
                  className="flex flex-row items-center justify-center gap-[10px] p-[8px_25px] w-min h-min relative overflow-hidden rounded-[30px] opacity-100 border-[1.5px] border-solid border-[#f3f3f1] bg-[#fefefe] shadow-none no-underline"
                  data-border="true"
                  data-framer-name="Label Section"
                >
                  <div
                    className="flex flex-row items-center justify-center gap-0 w-min h-min relative overflow-visible p-0 flex-none order-1 opacity-100"
                    data-framer-name="Right"
                  >
                    <div
                      className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className=" text-[#37312f] font-normal font-urbanist"
                        data-styles-preset="NFQi0OUa3"
                      >
                        Contact
                      </p>
                    </div>
                  </div>
                </span>
              </motion.div>
              <div
                className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 70,
                    delay: 0.2,
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="text-[64px] font-urbanist font-semibold"
                  data-styles-preset="o4SbqhkD9"
                >
                  Get In Touch
                </motion.h2>
              </div>
              <div
                className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full max-w-[650px] relative whitespace-pre-wrap break-words outline-none opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 70,
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className=" text-[#616161] font-normal text-lg text-center"
                  data-styles-preset="UCvrJxnzN"
                >
                  We are here ready to solve your problem.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 210,
                damping: 70,
                delay: 0.6,
                duration: 0.7,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-row flex-none items-center gap-[13px] h-min w-full overflow-visible p-[7px] relative rounded-[45px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)] opacity-100 will-change-transform"
              data-framer-appear-id="1rhzgu0"
              data-framer-name="Border"
            >
              <div className="flex-[1_0_0px] h-auto relative w-px">
                <div
                  data-border="true"
                  data-framer-name="Desktop"
                  className="flex flex-row items-start gap-[54px] h-min w-full overflow-hidden p-[72px_64px_52px] relative rounded-[35px] opacity-100"
                  style={{
                    background: `linear-gradient(180deg, var(--token-f395e90f-e08f-456b-b155-0974850affb9, #fff) 52%, var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, #fafaf7) 100%)`,
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor:
                      "var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24, rgb(240, 236, 231))",
                    willChange: "var(--framer-will-change-override, transform)",
                  }}
                >
                  <div
                    className="flex flex-col flex-none items-center gap-[26px] h-min max-w-[39%] w-[36%] overflow-hidden p-0 relative"
                    data-framer-name="Contact Content"
                  >
                    <div
                      className="flex flex-col flex-none items-start gap-2 h-min w-full overflow-hidden p-0 relative"
                      data-framer-name="Head Content"
                    >
                      <div
                        className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                        data-framer-component-type="RichTextContainer"
                      >
                        <h5
                          className="font-urbanist text-xl font-semibold text-black"
                          data-styles-preset="pBsAQV3Su"
                        >
                          Contact Information
                        </h5>
                      </div>
                      <div
                        className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words opacity-100"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="text-lg font-inter font-normal text-[#616161]"
                          data-styles-preset="UCvrJxnzN"
                        >
                          Contact us. Your feedback matters. Let&apos;s build a
                          better future together.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex flex-col flex-none items-center gap-[28px] h-min w-full overflow-hidden p-0 relative"
                      data-framer-name="Contact Detail"
                    >
                      <div
                        className="flex flex-col flex-none items-center gap-2 h-min w-full overflow-hidden p-0 relative"
                        data-framer-name="Office"
                      >
                        <div
                          className="flex flex-row flex-none items-center gap-4 h-min w-full overflow-hidden p-0 relative"
                          data-framer-name="Title"
                        >
                          <div
                            className="outline-none flex flex-col justify-start flex-shrink-0 flex-[1_0_0px] h-auto w-px relative whitespace-pre-wrap break-words opacity-100"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h5
                              className="text-xl font-urbanist font-semibold text-black"
                              data-styles-preset="pBsAQV3Su"
                            >
                              Head Office
                            </h5>
                          </div>
                        </div>
                        <div
                          className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words opacity-100"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="text-lg font-inter font-normal text-[#616161]"
                            data-styles-preset="UCvrJxnzN"
                          >
                            Pune, Maharashtra, <br />
                            India
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-none items-center gap-2 h-min w-full overflow-hidden p-0 relative"
                        data-framer-name="Office"
                      >
                        <div
                          className="flex flex-row flex-none items-center gap-4 h-min w-full overflow-hidden p-0 relative"
                          data-framer-name="Title"
                        >
                          <div
                            className="outline-none flex flex-col justify-start flex-shrink-0 flex-[1_0_0px] h-auto w-px relative whitespace-pre-wrap break-words opacity-100"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h5
                              className="text-xl font-urbanist font-semibold text-black"
                              data-styles-preset="pBsAQV3Su"
                            >
                              Phone
                            </h5>
                          </div>
                        </div>
                        <div
                          className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words opacity-100"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="text-lg font-inter font-normal text-[#616161]"
                            data-styles-preset="UCvrJxnzN"
                          >
                            <Link
                              href="tel:+919876543210"
                              target="_blank"
                              rel="noopener"
                            >
                              +91 98765 43210
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-none items-center gap-2 h-min w-full overflow-hidden p-0 relative"
                        data-framer-name="Office"
                      >
                        <div
                          className="flex flex-row flex-none items-center gap-4 h-min w-full overflow-hidden p-0 relative"
                          data-framer-name="Title"
                        >
                          <div
                            className="outline-none flex flex-col justify-start flex-shrink-0 flex-[1_0_0px] h-auto w-px relative whitespace-pre-wrap break-words opacity-100"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h5
                              className="text-xl font-urbanist font-semibold text-black"
                              data-styles-preset="pBsAQV3Su"
                            >
                              Email
                            </h5>
                          </div>
                        </div>
                        <div
                          className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words opacity-100"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="text-lg font-inter font-normal text-[#616161]"
                            data-styles-preset="UCvrJxnzN"
                          >
                            <Link
                              href="mailto:hello.nyayik@gmail.com"
                              target="_blank"
                              rel="noopener"
                            >
                              hello.nyayik@gmail.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col flex-[1_0_0px] items-center gap-5 h-min w-px overflow-visible p-0 relative"
                    data-framer-name="Form Content"
                  >
                    <form className="flex flex-col items-start gap-5 flex-[0_0_auto] h-min w-full overflow-visible p-0 relative">
                      <div
                        className="flex flex-col items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                        data-framer-name="Input Content"
                      >
                        <div
                          className="flex flex-row items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                          data-framer-name="Name"
                        >
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-px overflow-visible p-0 relative"
                            data-framer-name="First Name"
                          >
                            <label
                              className="flex flex-col items-start justify-start gap-[10px] h-min w-full p-0 relative flex-none rounded-[10px] opacity-100"
                              data-framer-name="First Name"
                            >
                              <div
                                className="flex flex-col justify-start flex-none relative h-auto w-auto opacity-100 whitespace-pre outline-none"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="text-sm text-[#616161] font-normal"
                                  data-styles-preset="U3auStWhB"
                                >
                                  First Name
                                </p>
                              </div>
                              <div className="flex-none relative h-auto w-full opacity-100">
                                <input
                                  type="text"
                                  required
                                  name="Name"
                                  placeholder="Jane "
                                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                                />
                              </div>
                            </label>
                          </div>
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-px overflow-visible p-0 relative"
                            data-framer-name="Last Name"
                          >
                            <label
                              className="flex flex-col items-start justify-start gap-[10px] h-min w-full p-0 relative flex-none rounded-[10px] opacity-100"
                              data-framer-name="Last Name"
                            >
                              <div
                                className="flex flex-col justify-start flex-none relative h-auto w-auto opacity-100 whitespace-pre outline-none"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="text-sm text-[#616161] font-normal"
                                  data-styles-preset="U3auStWhB"
                                >
                                  Last Name
                                </p>
                              </div>
                              <div className="flex-none relative h-auto w-full opacity-100">
                                <input
                                  type="text"
                                  required
                                  name="Name"
                                  placeholder="Doe "
                                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                                />
                              </div>
                            </label>
                          </div>
                        </div>

                        <div
                          className="flex flex-row items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                          data-framer-name="Phone + Email"
                        >
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-px overflow-visible p-0 relative"
                            data-framer-name="Phone"
                          >
                            <label
                              className="flex flex-col items-start justify-start gap-[10px] h-min w-full p-0 relative flex-none rounded-[10px] opacity-100"
                              data-framer-name="Phone"
                            >
                              <div
                                className="flex flex-col justify-start flex-none relative h-auto w-auto opacity-100 whitespace-pre outline-none"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="text-sm text-[#616161] font-normal"
                                  data-styles-preset="U3auStWhB"
                                >
                                  Phone Number
                                </p>
                              </div>
                              <div className="flex-none relative h-auto w-full opacity-100">
                                <input
                                  type="text"
                                  required
                                  name="Name"
                                  placeholder="Phone "
                                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                                />
                              </div>
                            </label>
                          </div>
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-px overflow-visible p-0 relative"
                            data-framer-name="Email"
                          >
                            <label
                              className="flex flex-col items-start justify-start gap-[10px] h-min w-full p-0 relative flex-none rounded-[10px] opacity-100"
                              data-framer-name="Email"
                            >
                              <div
                                className="flex flex-col justify-start flex-none relative h-auto w-auto opacity-100 whitespace-pre outline-none"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="text-sm text-[#616161] font-normal"
                                  data-styles-preset="U3auStWhB"
                                >
                                  Email
                                </p>
                              </div>
                              <div className="flex-none relative h-auto w-full opacity-100">
                                <input
                                  type="email"
                                  required
                                  name="Name"
                                  placeholder="Email "
                                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                                />
                              </div>
                            </label>
                          </div>
                        </div>

                        <div
                          className="flex flex-col items-start justify-start gap-[10px] w-full h-min overflow-visible p-0 relative"
                          data-framer-name="Massage"
                        >
                          <label className="flex flex-col items-start justify-start gap-[10px] w-full h-min overflow-visible p-0 relative rounded-[10px] opacity-100 flex-shrink-0">
                            <div
                              className="flex flex-col justify-start flex-shrink-0 flex-[0_0_auto] h-auto w-auto relative whitespace-pre outline-none opacity-100"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="text-sm text-[#616161] font-normal"
                                data-styles-preset="U3auStWhB"
                              >
                                Message
                              </p>
                            </div>
                            <div className="flex-none relative h-auto w-full opacity-100 min-h-[147px]">
                              <textarea
                                required
                                name="Message"
                                placeholder="Message"
                                style={{
                                  resize: "none",
                                  minHeight: "inherit",
                                  maxHeight: "inherit",
                                }}
                                className="w-full overflow-hidden text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none flex overflow-y-auto whitespace-break-spaces"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="flex-none h-auto relative w-full">
                        <button
                          type="submit"
                          className="w-full opacity-100 rounded-[20px] bg-[#111111] hover:bg-[#494949] border border-solid border-[#989897]
            shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
            flex flex-row flex-nowrap items-center justify-center content-center gap-0 
            cursor-pointer h-[46px] px-[28px] py-[13px] relative  overflow-visible"
                          data-border="true"
                          data-framer-name="Default"
                          data-reset="button"
                        >
                          <div
                            className="outline-none flex flex-col justify-start shrink-0
            text-white [--framer-link-text-color:rgb(0,153,255)] [--framer-link-text-decoration:underline]
            transform-none opacity-100 select-none
            flex-none h-auto w-auto relative whitespace-pre"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="text-[17px] text-white font-urbanist font-medium"
                              data-styles-preset="huFE_kN6t"
                            >
                              Submit
                            </p>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
