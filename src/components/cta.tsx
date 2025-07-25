"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CTA = () => {
  return (
    <section
      className="flex flex-col items-center justify-center flex-none flex-nowrap gap-0 min-h-fit w-full overflow-hidden px-[60px] pt-[90px] pb-[60px] bg-[#fefefe] relative"
      data-framer-name="CTA"
      id="cta"
    >
      <div
        className="absolute left-0 right-0 -bottom-[437px] h-[764px] bg-[#fafaf7] border border-solid border-[#f3f3f1] overflow-hidden flex-none"
        data-border="true"
        data-framer-name="Extended Footer Background"
      ></div>
      <div
        className="relative flex flex-row flex-nowrap items-center justify-center w-full max-w-[1228px] bg-[linear-gradient(0deg,#f0ece7_0%,#f8f9fa_100%)] rounded-[45px] overflow-visible p-0 gap-0 h-min flex-none"
        data-framer-name="Container"
      >
        <div className="contents">
          <div className="relative flex-[1_0_0px] w-px h-auto z-20">
            <div
              className="relative flex flex-col flex-nowrap items-center justify-center gap-0 overflow-visible p-0 w-full h-min rounded-[45px] opacity-100"
              data-framer-name="Desktop"
            >
              <div
                className="relative flex flex-row flex-nowrap items-center justify-center gap-0 overflow-visible p-[7px] w-full h-min rounded-[45px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)] opacity-100"
                data-framer-name="Border"
              >
                <div
                  className="relative flex flex-row flex-nowrap items-center justify-center gap-0 overflow-hidden px-[52px] py-[90px] w-[1px] h-min rounded-[40px] bg-white border border-solid border-[#f3f3f1] flex-[1_0_0px] opacity-100 will-change-transform"
                  data-border="true"
                  data-framer-name="Content"
                >
                  <div
                    className="relative z-[2] flex flex-col flex-nowrap items-center justify-center gap-[60px] overflow-visible p-0 w-[1px] h-min flex-[1_0_0px]"
                    data-framer-name="Wrapper"
                  >
                    <div
                      className="relative flex flex-col flex-nowrap items-center justify-center gap-[60px] overflow-visible p-0 w-min h-min"
                      data-framer-name="Content"
                    >
                      <div
                        className="relative flex flex-col flex-nowrap items-center justify-center gap-[24px] overflow-hidden p-0 w-[1110px] h-min flex-none"
                        data-framer-name="Heading"
                      >
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
                                  Empower Your Legal Practice
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
                            delay: 0.4,
                            duration: 0.3,
                          }}
                          viewport={{ once: true, amount: 0.6 }}
                          className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100 transform-none"
                          data-framer-component-type="RichTextContainer"
                        >
                          <h2
                            className="text-[52px] font-urbanist font-semibold text-[#111111] text-center"
                            data-styles-preset="o4SbqhkD9"
                          >
                            Ready to Revolutionize
                            <br />
                            Your Legal Operations?
                          </h2>
                        </motion.div>
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
                          viewport={{ once: true, amount: 0.2 }}
                          className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full max-w-[650px] relative whitespace-pre-wrap break-words"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="font-normal text-lg text-[#616161] text-center"
                            data-styles-preset="UCvrJxnzN"
                          >
                            Sign up today and experience how our AI Legal Agent
                            streamlines research, automates drafting, and keeps
                            you compliant — effortlessly.
                          </p>
                        </motion.div>
                      </div>
                      <motion.form
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 40,
                          delay: 0.8,
                          duration: 0.3,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                        className="relative flex flex-row flex-nowrap items-start justify-center gap-0 p-0 w-[485px] h-min flex-none overflow-visible rounded-[17px] opacity-100"
                      >
                        <label
                          data-border="true"
                          className="relative flex flex-row flex-nowrap items-center justify-center gap-6 p-[7px] h-min w-[1px] flex-[1_0_0px] rounded-[23px] opacity-100 shadow-[0_2px_20px_0_rgba(0,0,0,0.07)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_50%,rgba(254,254,254,1)_100%)] border border-solid border-[rgb(240,236,231)]"
                        >
                          <div className="flex-[1_0_0px] relative h-auto w-[1px] opacity-100 ">
                            <input
                              type="email"
                              required
                              name="Email"
                              placeholder="Your Email Addres"
                              className="p-[12px_20px_12px_20px] bg-transparent font-inter font-normal text-[#111111] w-full focus-visible:outline-none"
                            />
                          </div>
                          <div className="flex-none h-auto relative w-[146px]">
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
                                  Get Started
                                </p>
                              </div>
                            </button>
                          </div>
                        </label>
                      </motion.form>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 210,
                      damping: 70,
                      delay: 1.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="cursor-none flex-none h-auto w-auto absolute left-0 top-0 z-[1]"
                  >
                    <div
                      className="h-[321px] w-[439px] overflow-hidden relative"
                      data-framer-name="Variant 1"
                    >
                      <div
                        className="absolute top-[-40px] left-[-12px] z-[1] w-[175px] h-[356px] flex flex-row flex-nowrap items-center justify-center gap-[13px] overflow-hidden p-0 opacity-100 rotate-[-22deg] blur-[15px]"
                        data-framer-name="Light 2"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Light Shape"
                          className="flex-none h-[265px] relative w-[110px] flex-shrink-0 opacity-100"
                          style={{
                            imageRendering: "pixelated",
                            backgroundSize: "100% 100%",
                            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20110%20265%22%3E%3Cg%20transform%3D%22translate(6.793%203.724)%22%20id%3D%22ss9696144249_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9696144249_2g-196530993%22%20x1%3D%220.3665714712834984%22%20x2%3D%220.6334285287165016%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(227%2C%20108%2C%2023)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgba(255%2C147%2C54%2C0)%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%203.263%20L%2017.219%200%20L%20102.595%20252.461%20L%2072.869%20253.516%20Z%22%20fill%3D%22url(%23idss9696144249_2g-196530993)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                          }}
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div
                        className="blur-[6px] rotate-[-55deg] opacity-100 flex flex-none flex-row flex-nowrap items-center justify-center gap-[13px] h-[321px] w-[97px] absolute left-[133px] top-[-152px] overflow-hidden p-0 z-[1]"
                        data-framer-name="Light 4"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Light Shape"
                          aria-hidden="true"
                          className="flex-shrink-0 opacity-100 flex-none h-[440px] w-[235px] relative"
                          style={{
                            imageRendering: "pixelated",
                            backgroundSize: "100% 100%",
                            backgroundImage:
                              'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20235%20440%22%3E%3Cg%20transform%3D%22translate(27.59%207.338)%22%20id%3D%22ss10212985216_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10212985216_2g-885206072%22%20x1%3D%220.42643177498592305%22%20x2%3D%220.5735682250140769%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20218%2C%2092)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgba(255%2C%20255%2C%20255%2C%200)%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%209.309%20L%2069.657%200%20L%20206.853%20411.19%20L%2090.148%20419.466%20Z%22%20fill%3D%22url(%23idss10212985216_2g-885206072)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
                          }}
                        ></div>
                      </div>
                      <div
                        data-framer-name="Light 5"
                        className="absolute flex-none h-[206px] w-[43px] left-[4px] z-[1] opacity-[0.56] rounded-full blur-[14px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 161, 86) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-19deg)",
                          top: "calc(53.89408099688475% - 103px)",
                        }}
                      ></div>
                      <div
                        className="absolute flex-none h-[448px] w-[61px] left-[76px] top-[-151px] z-[1] rounded-full blur-[25px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-58deg)",
                          opacity: 1,
                        }}
                        data-framer-name="Light 6"
                      ></div>
                      <div
                        className="absolute flex-none h-[381px] w-[35px] left-[157px] top-[-182px] z-[1] rounded-full blur-[14px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-69deg)",
                          opacity: 0.8,
                        }}
                        data-framer-name="Light 7"
                      ></div>
                      <div
                        className="absolute flex-none h-[204px] w-[290px] left-[-129px] top-[-131px] z-[1] blur-[38px] rounded-full"
                        style={{
                          backgroundColor: "rgb(255, 150, 55)",
                          opacity: 0.8,
                        }}
                        data-framer-name="Light 8"
                      ></div>
                      <div
                        className="absolute flex-none h-[185px] w-[15px] left-[-11px] top-[11px] z-[1] blur-[17px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-44deg)",
                          opacity: 1,
                        }}
                        data-framer-name="Light 10"
                      ></div>
                      <div
                        className="absolute flex-none h-[180px] w-[2px] top-[-70px] right-[186px] z-[1] overflow-hidden rounded-[24px] blur-[9px]"
                        style={{
                          background:
                            "linear-gradient(rgba(129, 187, 255, 0) 0%, rgb(255, 150, 55) 100%)",
                          transform: "rotate(-82deg)",
                          opacity: 1,
                          willChange:
                            "var(--framer-will-change-override, transform)",
                        }}
                        data-framer-name="Light 13"
                      ></div>
                      <div
                        className="absolute flex-none h-[209px] w-[5px] top-[29px] left-[193px] z-[1] overflow-hidden rounded-[24px] blur-[7px]"
                        style={{
                          background:
                            "linear-gradient(rgba(255, 255, 255, 0.63) 0%, rgba(255, 255, 255, 0.51) 100%)",
                          transform: "rotate(-55deg)",
                          opacity: 1,
                          willChange:
                            "var(--framer-will-change-override, transform)",
                        }}
                        data-framer-name="Light 14"
                      ></div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 80, y: 0, rotateY: 180 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 180 }}
                    transition={{
                      type: "spring",
                      stiffness: 210,
                      damping: 70,
                      delay: 1.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="cursor-none flex-none h-auto w-auto absolute right-0 top-0 z-[1]"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <div
                      className="h-[321px] w-[439px] overflow-hidden relative"
                      data-framer-name="Variant 1"
                    >
                      <div
                        className="absolute top-[-40px] left-[-12px] z-[1] w-[175px] h-[356px] flex flex-row flex-nowrap items-center justify-center gap-[13px] overflow-hidden p-0 opacity-100 rotate-[-22deg] blur-[15px]"
                        data-framer-name="Light 2"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Light Shape"
                          className="flex-none h-[265px] relative w-[110px] flex-shrink-0 opacity-100"
                          style={{
                            imageRendering: "pixelated",
                            backgroundSize: "100% 100%",
                            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20110%20265%22%3E%3Cg%20transform%3D%22translate(6.793%203.724)%22%20id%3D%22ss9696144249_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9696144249_2g-196530993%22%20x1%3D%220.3665714712834984%22%20x2%3D%220.6334285287165016%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(227%2C%20108%2C%2023)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgba(255%2C147%2C54%2C0)%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%203.263%20L%2017.219%200%20L%20102.595%20252.461%20L%2072.869%20253.516%20Z%22%20fill%3D%22url(%23idss9696144249_2g-196530993)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                          }}
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div
                        className="blur-[6px] rotate-[-55deg] opacity-100 flex flex-none flex-row flex-nowrap items-center justify-center gap-[13px] h-[321px] w-[97px] absolute left-[133px] top-[-152px] overflow-hidden p-0 z-[1]"
                        data-framer-name="Light 4"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Light Shape"
                          aria-hidden="true"
                          className="flex-shrink-0 opacity-100 flex-none h-[440px] w-[235px] relative"
                          style={{
                            imageRendering: "pixelated",
                            backgroundSize: "100% 100%",
                            backgroundImage:
                              'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20235%20440%22%3E%3Cg%20transform%3D%22translate(27.59%207.338)%22%20id%3D%22ss10212985216_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10212985216_2g-885206072%22%20x1%3D%220.42643177498592305%22%20x2%3D%220.5735682250140769%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20218%2C%2092)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgba(255%2C%20255%2C%20255%2C%200)%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%209.309%20L%2069.657%200%20L%20206.853%20411.19%20L%2090.148%20419.466%20Z%22%20fill%3D%22url(%23idss10212985216_2g-885206072)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
                          }}
                        ></div>
                      </div>
                      <div
                        data-framer-name="Light 5"
                        className="absolute flex-none h-[206px] w-[43px] left-[4px] z-[1] opacity-[0.56] rounded-full blur-[14px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 161, 86) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-19deg)",
                          top: "calc(53.89408099688475% - 103px)",
                        }}
                      ></div>
                      <div
                        className="absolute flex-none h-[448px] w-[61px] left-[76px] top-[-151px] z-[1] rounded-full blur-[25px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-58deg)",
                          opacity: 1,
                        }}
                        data-framer-name="Light 6"
                      ></div>
                      <div
                        className="absolute flex-none h-[381px] w-[35px] left-[157px] top-[-182px] z-[1] rounded-full blur-[14px]"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-69deg)",
                          opacity: 0.8,
                        }}
                        data-framer-name="Light 7"
                      ></div>
                      <div
                        className="absolute flex-none h-[204px] w-[290px] left-[-129px] top-[-131px] z-[1] blur-[38px] rounded-full"
                        style={{
                          backgroundColor: "rgb(255, 150, 55)",
                          opacity: 0.8,
                        }}
                        data-framer-name="Light 8"
                      ></div>
                      <div
                        className="absolute flex-none h-[185px] w-[15px] left-[-11px] top-[11px] z-[1] blur-[17px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(180.148deg, rgb(255, 118, 49) 0%, rgba(255, 154, 58, 0) 100%)",
                          transform: "rotate(-44deg)",
                          opacity: 1,
                        }}
                        data-framer-name="Light 10"
                      ></div>
                      <div
                        className="absolute flex-none h-[180px] w-[2px] top-[-70px] right-[186px] z-[1] overflow-hidden rounded-[24px] blur-[9px]"
                        style={{
                          background:
                            "linear-gradient(rgba(129, 187, 255, 0) 0%, rgb(255, 150, 55) 100%)",
                          transform: "rotate(-82deg)",
                          opacity: 1,
                          willChange:
                            "var(--framer-will-change-override, transform)",
                        }}
                        data-framer-name="Light 13"
                      ></div>
                      <div
                        className="absolute flex-none h-[209px] w-[5px] top-[29px] left-[193px] z-[1] overflow-hidden rounded-[24px] blur-[7px]"
                        style={{
                          background:
                            "linear-gradient(rgba(255, 255, 255, 0.63) 0%, rgba(255, 255, 255, 0.51) 100%)",
                          transform: "rotate(-55deg)",
                          opacity: 1,
                          willChange:
                            "var(--framer-will-change-override, transform)",
                        }}
                        data-framer-name="Light 14"
                      ></div>
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
                    className="absolute bottom-[98px] left-[20%] w-[65px] h-[58px] flex-none overflow-visible z-[1]"
                    style={{
                      aspectRatio: "1.1206896551724137 / 1",
                      cursor: "none",
                      willChange: "transform",
                      opacity: 1,
                      transform:
                        "translateX(-50%) translateX(-2.59px) translateY(-5.18px) rotate(5.18deg)",
                    }}
                    data-framer-name="Cursor 1"
                  >
                    <div
                      className="absolute inset-0 rounded-inherit"
                      data-framer-background-image-wrapper="true"
                    >
                      <Image
                        decoding="async"
                        src="/images/user.png"
                        alt=""
                        width={32}
                        height={32}
                        quality={100}
                        className="block w-full h-full rounded-inherit object-cover object-center"
                      />
                    </div>
                  </motion.div>
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
                    data-framer-name="Cursor 2"
                    className="aspect-[1.0526] cursor-none flex-none h-[var(--framer-aspect-ratio-supported,57px)] w-[60px] overflow-visible absolute left-[76%] top-[100px] z-[1] will-change-transform opacity-100 translate-x-[-50%]"
                  >
                    <div
                      className="absolute inset-0 rounded-inherit"
                      data-framer-background-image-wrapper="true"
                    >
                      <Image
                        decoding="async"
                        src="/images/user-2.png"
                        alt=""
                        height={32}
                        width={32}
                        quality={100}
                        className="block w-full h-full rounded-inherit object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
