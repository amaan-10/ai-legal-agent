"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function SignInComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="flex flex-col flex-none items-center place-content-center gap-[10px] max-w-[1080px] overflow-hidden p-[120px_60px_60px] relative w-full h-min z-[3]"
      data-framer-name="SignIn"
      id="signin"
    >
      <div
        className="flex flex-col flex-none items-center gap-[50px] h-min overflow-visible p-0 relative w-full"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 w-full h-min overflow-hidden p-0 relative"
          data-framer-name="Heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
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
                    className="text-[#37312f] font-normal font-urbanist"
                    data-styles-preset="NFQi0OUa3"
                  >
                    Sign In
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
              animate={{ opacity: 1, y: 0 }}
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
              Welcome Back
            </motion.h2>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
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
              className="flex flex-col items-center gap-[54px] h-min w-full overflow-hidden p-[72px_64px_52px] relative rounded-[35px] opacity-100"
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
                className="flex flex-col flex-none items-center gap-[26px] h-min w-full overflow-hidden p-0 relative"
                data-framer-name="SignIn Content"
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
                      Login Credentials
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
                      Enter your email and password to access your account.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col flex-[1_0_0px] items-center gap-5 h-min w-full overflow-visible p-0 relative"
                data-framer-name="Form Content"
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-start gap-5 flex-[0_0_auto] h-min w-full overflow-visible p-0 relative"
                >
                  <div
                    className="flex flex-col items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                    data-framer-name="Input Content"
                  >
                    <div
                      className="flex flex-col items-start justify-start gap-[10px] w-full h-min overflow-visible p-0 relative"
                      data-framer-name="Email"
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
                            Email Address
                          </p>
                        </div>
                        <div className="flex-none relative h-auto w-full opacity-100">
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane.doe@example.com"
                            className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                          />
                        </div>
                      </label>
                    </div>
                    <div
                      className="flex flex-col items-start justify-start gap-[10px] w-full h-min overflow-visible p-0 relative"
                      data-framer-name="Password"
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
                            Password
                          </p>
                        </div>
                        <div className="flex-none relative h-auto w-full opacity-100">
                          <input
                            type="password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full overflow-hidden whitespace-nowrap text-ellipsis border-none bg-[#F3F3F1] text-[#616161] p-[12px_20px_12px_20px] rounded-[10px] focus-visible:outline-none"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-[#f3f3f1] text-[#111111] focus:ring-[#111111]"
                        />
                        <span className="text-sm text-[#616161] font-normal">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-[#111111] font-medium hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative w-full">
                    <button
                      type="submit"
                      className="w-full opacity-100 rounded-[20px] bg-[#111111] hover:bg-[#494949] border border-solid border-[#989897]
            shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
            flex flex-row flex-nowrap items-center justify-center content-center gap-0 
            cursor-pointer h-[46px] px-[28px] py-[13px] relative overflow-visible"
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
                          Sign In
                        </p>
                      </div>
                    </button>
                  </div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="text-[#616161] font-normal text-lg text-center"
                      data-styles-preset="UCvrJxnzN"
                    >
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/auth/sign-up"
                        className="text-[#FE6A2E] hover:text-[#FE6A2E] font-semibold hover:font-semibold hover:underline"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
