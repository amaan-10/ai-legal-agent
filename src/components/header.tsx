"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contents font-urbanist w-full ">
      <div className="flex-none fixed top-[8px] w-auto h-auto will-change-transform z-[999]">
        <nav
          className="relative flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-min w-[980px] overflow-visible py-[12px] px-0 transition-transform duration-500 delay-500 ease-in-out"
          style={{
            borderBottomWidth: scrolled ? "1px" : "0px",
            borderTopWidth: scrolled ? "1px" : "0px",
            borderLeftWidth: scrolled ? "1px" : "0px",
            borderRightWidth: scrolled ? "1px" : "0px",
            borderColor: scrolled ? "rgb(243, 243, 241)" : "rgba(0,0,0,0)",
            borderStyle: "solid",
            borderRadius: scrolled ? "40px" : "0px",
            boxShadow: scrolled
              ? "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
              : "0px 0px 0px 0px rgba(0, 0, 0, 0.05)",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            backgroundImage: scrolled
              ? "linear-gradient(180deg, rgb(255, 255, 255) 46.97%, rgb(250, 250, 247) 100%)"
              : "none",
            backgroundColor: scrolled ? "transparent" : "rgba(0,0,0,0)",
            backgroundPosition: "0% 0%",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            backgroundAttachment: "scroll",
            backgroundClip: "padding-box",
            backgroundOrigin: "border-box",
          }}
        >
          <div className="relative flex flex-row flex-nowrap flex-[1_0_0px] items-center content-center justify-between overflow-visible p-0 h-min w-px rounded-none shadow-none transform-none origin-center">
            <div
              className="flex items-center justify-center flex-row flex-nowrap gap-[10px] h-min w-min overflow-visible p-0 relative transition-transform duration-500 ease-in-out"
              data-framer-name="Logo Wrapper"
              style={{
                borderRadius: 0,
                transform: scrolled ? "translateX(25px)" : "translateX(0)",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <Link
                className="block aspect-[3.4545] flex-none h-[33px] w-[114px] overflow-visible relative no-underline"
                data-framer-name="Logo"
                href="/"
                data-framer-page-link-current="true"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    inset: 0,
                  }}
                >
                  <Image
                    decoding="async"
                    src="/images/Nyāyik.png"
                    alt="Logo"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center center",
                      objectFit: "cover",
                    }}
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            </div>

            <div
              className="flex flex-row flex-nowrap items-center justify-center gap-6 flex-none h-min overflow-visible p-0 relative w-min opacity-100"
              data-framer-name="Nav Menu"
            >
              <div
                className="framer-gxsw7aoutline-none flex flex-col justify-start shrink-0 opacity-100 flex-none h-auto relative whitespace-pre w-auto"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#494949] font-medium text-lg"
                  data-styles-preset="H0bugeDms"
                >
                  <Link
                    className="text-[#616161]"
                    data-styles-preset="zyClEo6vE"
                    href="/#valuable-feature"
                  >
                    Features
                  </Link>
                </p>
              </div>
              <div
                className="framer-gxsw7aoutline-none flex flex-col justify-start shrink-0 opacity-100 flex-none h-auto relative whitespace-pre w-auto"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#494949] font-medium text-lg"
                  data-styles-preset="H0bugeDms"
                >
                  <Link
                    className="text-[#616161]"
                    data-styles-preset="zyClEo6vE"
                    href="/#benefits"
                  >
                    Benefits
                  </Link>
                </p>
              </div>
              <div
                className="framer-gxsw7aoutline-none flex flex-col justify-start shrink-0 opacity-100 flex-none h-auto relative whitespace-pre w-auto"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#494949] font-medium text-lg"
                  data-styles-preset="H0bugeDms"
                >
                  <Link
                    className="text-[#616161]"
                    data-styles-preset="zyClEo6vE"
                    href="/#how-to-use"
                  >
                    How to Use
                  </Link>
                </p>
              </div>

              <div
                className="flex items-center justify-center flex-row flex-nowrap gap-[3px] p-0 relative w-min h-min overflow-visible cursor-pointer flex-none opacity-100"
                data-framer-name="Sub Menu"
                data-highlight="true"
                id="undefined-1811ejt"
              >
                <div
                  className="outline-none flex flex-col justify-start shrink-0 opacity-100 flex-none h-auto relative whitespace-pre w-auto"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="text-[#616161] text-lg font-normal"
                    data-styles-preset="H0bugeDms"
                  >
                    Pages
                  </p>
                </div>
                <div
                  className="flex flex-col flex-nowrap items-center justify-center gap-[10px] h-[23px] overflow-hidden p-0 relative w-min flex-none opacity-100"
                  data-framer-name="Icon"
                >
                  <div className="flex-none h-[23px] w-[20px] relative opacity-100">
                    <div className="contents">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--token-976d8519-4529-425a-83b6-fc169b0e21bc, rgb(97, 97, 97))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" flex-none h-auto relative w-auto group transition-transform duration-500 ease-in-out"
              style={{
                transform: scrolled ? "translateX(-25px)" : "translateX(0)",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <Link
                className="relative flex flex-nowrap flex-row items-center justify-center gap-[10px] p-[8px_26px] h-min w-min cursor-pointer overflow-visible no-underline rounded-[999px] bg-white border border-solid border-[rgb(240,236,231)] shadow-[rgba(0,0,0,0.133)_0px_0px_0px_-2.5px,rgba(0,0,0,0)_0px_0px_0px_-5px,rgba(0,0,0,0.15)_0px_-1px_4px_0px_inset,rgba(242,242,240,0.4)_0px_0px_0px_2px]"
                data-border="true"
                data-framer-name="Button S - Nav"
                href="/auth/sign-up"
                rel="noopener"
              >
                <div
                  className="flex flex-col justify-start flex-shrink-0 outline-none flex-none h-auto relative whitespace-pre w-auto"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="text-black text-[17px] font-medium"
                    data-styles-preset="huFE_kN6t"
                  >
                    Sign Up
                  </p>
                </div>
                <div
                  className="flex items-center justify-center flex-row flex-nowrap gap-[10px] flex-none h-min w-min min-h-[20px] min-w-[20px] overflow-hidden p-0 relative -rotate-90"
                  style={{ opacity: 1 }}
                >
                  <div className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[21px] group-hover:translate-y-[21px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(0, 0, 0))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <line x1="7" y1="7" x2="17" y2="17"></line>
                      <polyline points="17 7 17 17 7 17"></polyline>
                    </svg>
                  </div>

                  <div className="absolute top-[-21px] left-[-21px] w-5 h-5 transition-all duration-300 ease-in-out group-hover:translate-x-[21px] group-hover:translate-y-[21px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(0, 0, 0))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <line x1="7" y1="7" x2="17" y2="17"></line>
                      <polyline points="17 7 17 17 7 17"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
