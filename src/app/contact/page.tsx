"use client";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useResponsiveState } from "@/lib/useResponsiveState";

const Contact = () => {
  const deviceType = useResponsiveState();

  return (
    <div>
      <main className=" min-h-[100vh] w-full relative flex flex-col flex-nowrap items-center justify-start gap-0 h-min overflow-visible bg-[#fefefe]">
        <div
          className="absolute left-0 right-0 top-0 z-[1] flex flex-row flex-nowrap items-center justify-center gap-[10px] min-h-[350px] h-min overflow-hidden p-0 cursor-none"
          data-framer-name="Light"
        >
          <div
            className="absolute left-[-100px] md:left-[-120px] lg:left-[-80px] top-[-100px] md:top-[-100px] lg:top-[-70px] z-[1] w-[434px] scale-90 md:scale-50 lg:scale-100 h-auto flex-none cursor-none"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div
              className="relative h-[331px] w-full overflow-hidden opacity-100"
              data-framer-name="Variant 1"
            >
              <div
                className="absolute right-[31px] top-[-48px] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 blur-[35px] opacity-100"
                data-framer-name="Wide Elipse"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1227"
                  className="relative h-[69px] w-[302px] flex-shrink-0 image-pixelated fill-black text-black opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full h-full [aspect-ratio:inherit]">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 302 69"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg656739424_398"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="filter blur-[50px] opacity-100 flex flex-row flex-nowrap items-center justify-center content-center gap-[10px] h-[257px] w-[298px] p-0 overflow-hidden flex-none absolute right-[-151px] top-[-86px]"
                data-framer-name="Elipse 1"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1230"
                  aria-hidden="true"
                  className="flex-none h-[205px] w-[303px] relative shrink-0 opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 303 205'><path d='M 302.247 102.971 C 302.247 46.638 234.759 0.971 151.509 0.971 C 68.259 0.971 0.771 46.638 0.771 102.971 C 0.771 159.304 68.259 204.971 151.509 204.971 C 234.759 204.971 302.247 159.304 302.247 102.971 Z' fill='rgb(255,150,55)'></path></svg>")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Elipse 2"
                className="flex flex-none flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min p-0 overflow-visible absolute right-[50px] top-[-100px] opacity-100"
                style={{
                  filter: "blur(50px)",
                  alignContent: "center",
                }}
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1229"
                  aria-hidden="true"
                  className="flex-none relative w-[288px] h-[350px] opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 absolute top-[-32px] right-[-6px] opacity-60"
                data-framer-name="Light Elipse 1"
              >
                <div
                  data-framer-name="Ellipse"
                  className="relative flex-none w-[18px] h-[221px] rounded-full opacity-100 blur-[3.5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] [transform:rotate(-20deg)] [background:linear-gradient(180.148deg,_rgb(254,236,173)_-18%,_rgba(255,154,58,0)_80%)]"
                ></div>
              </div>
              <div
                className="absolute flex flex-row flex-nowrap items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-100 h-[312px] w-[124px] left-[calc(48.47826086956524%_-_124.31040564373899px/2)] top-[-56px]"
                data-framer-name="Light 3"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8416"
                  aria-hidden="true"
                  className="relative flex-none opacity-100 h-[337px] w-[134px]"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="    flex    items-center    justify-center    flex-row    flex-nowrap    gap-[10px]    h-[304px]    w-[125px]    absolute    left-[90px]    top-[-50px]    p-0    overflow-hidden    blur-[6px]    rotate-[7deg]    opacity-100  "
                data-framer-name="Light 2"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8417"
                  aria-hidden="true"
                  className="    relative    w-[135px]    h-[328px]    flex-none    opacity-100    shrink-0    bg-cover    image-pixelated  "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[61px] top-[-62px] flex flex-row items-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 filter blur-[10px] opacity-60"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[135px] h-[328px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 absolute right-[123px] top-[61px] opacity-60 blur-[8px]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[27px] top-[36px] w-[72px] h-[175px] flex flex-row items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-60 rotate-[-5deg]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                    imageRendering: "pixelated",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-182px] md:right-[-120px] lg:right-[-80px] top-[-100px] md:top-[-100px] lg:top-[-70px] z-[1] w-[434px] scale-[0.49] md:scale-50 lg:scale-100 h-auto flex-none cursor-none">
            <div
              className="relative h-[331px] w-full overflow-hidden opacity-100"
              data-framer-name="Variant 1"
            >
              <div
                className="absolute right-[31px] top-[-48px] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 blur-[35px] opacity-100"
                data-framer-name="Wide Elipse"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1227"
                  className="relative h-[69px] w-[302px] flex-shrink-0 image-pixelated fill-black text-black opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full h-full [aspect-ratio:inherit]">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 302 69"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg656739424_398"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="filter blur-[50px] opacity-100 flex flex-row flex-nowrap items-center justify-center content-center gap-[10px] h-[257px] w-[298px] p-0 overflow-hidden flex-none absolute right-[-151px] top-[-86px]"
                data-framer-name="Elipse 1"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1230"
                  aria-hidden="true"
                  className="flex-none h-[205px] w-[303px] relative shrink-0 opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 303 205'><path d='M 302.247 102.971 C 302.247 46.638 234.759 0.971 151.509 0.971 C 68.259 0.971 0.771 46.638 0.771 102.971 C 0.771 159.304 68.259 204.971 151.509 204.971 C 234.759 204.971 302.247 159.304 302.247 102.971 Z' fill='rgb(255,150,55)'></path></svg>")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Elipse 2"
                className="flex flex-none flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min p-0 overflow-visible absolute right-[50px] top-[-100px] opacity-100"
                style={{
                  filter: "blur(50px)",
                  alignContent: "center",
                }}
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1229"
                  aria-hidden="true"
                  className="flex-none relative w-[288px] h-[350px] opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 absolute top-[-32px] right-[-6px] opacity-60"
                data-framer-name="Light Elipse 1"
              >
                <div
                  data-framer-name="Ellipse"
                  className="relative flex-none w-[18px] h-[221px] rounded-full opacity-100 blur-[3.5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] [transform:rotate(-20deg)] [background:linear-gradient(180.148deg,_rgb(254,236,173)_-18%,_rgba(255,154,58,0)_80%)]"
                ></div>
              </div>
              <div
                className="absolute flex flex-row flex-nowrap items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-100 h-[312px] w-[124px] left-[calc(48.47826086956524%_-_124.31040564373899px/2)] top-[-56px]"
                data-framer-name="Light 3"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8416"
                  aria-hidden="true"
                  className="relative flex-none opacity-100 h-[337px] w-[134px]"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="    flex    items-center    justify-center    flex-row    flex-nowrap    gap-[10px]    h-[304px]    w-[125px]    absolute    left-[90px]    top-[-50px]    p-0    overflow-hidden    blur-[6px]    rotate-[7deg]    opacity-100  "
                data-framer-name="Light 2"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8417"
                  aria-hidden="true"
                  className="    relative    w-[135px]    h-[328px]    flex-none    opacity-100    shrink-0    bg-cover    image-pixelated  "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[61px] top-[-62px] flex flex-row items-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 filter blur-[10px] opacity-60"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[135px] h-[328px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 absolute right-[123px] top-[61px] opacity-60 blur-[8px]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[27px] top-[36px] w-[72px] h-[175px] flex flex-row items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-60 rotate-[-5deg]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                    imageRendering: "pixelated",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <section
          className="flex flex-col flex-none items-center place-content-center gap-[10px] overflow-hidden p-[100px_20px_45px] md:p-[90px_35px_60px] lg:p-[120px_60px_60px] relative w-full h-min z-[3] mt-5"
          data-framer-name="Contact"
          id="contact"
        >
          <div
            className="flex flex-col flex-none items-center gap-[40px] md:gap-[60px] lg:gap-[90px] h-min max-w-[1080px] overflow-visible p-0 relative w-full"
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
                        className=" text-[15px] lg:text-base text-[#37312f] font-normal font-urbanist"
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
                  className="text-[32px] md:text-[38px] lg:text-[64px] font-urbanist font-semibold"
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
                  className=" text-[#616161] font-normal text-base lg:text-lg text-center"
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
              <div className="lg:flex-[1_0_0px] h-auto relative w-full lg:w-px">
                <div
                  data-border="true"
                  data-framer-name="Desktop"
                  className="flex flex-col-reverse lg:flex-row items-start gap-[54px] h-min w-full overflow-hidden p-[30px] md:p-[42px_42px_52px] lg:p-[72px_64px_52px] relative rounded-[35px] opacity-100"
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
                    className="flex flex-col flex-none items-center gap-[26px] h-min lg:max-w-[39%] w-full lg:w-[36%] overflow-hidden p-0 relative"
                    data-framer-name="Contact Content"
                  >
                    <div
                      className="flex flex-col flex-none items-start gap-2 h-min w-full overflow-hidden p-0 relative"
                      data-framer-name="Head Content"
                    >
                      <div
                        className="outline-none flex flex-col justify-center md:justify-start flex-shrink-0 flex-none h-auto w-full md:w-auto relative whitespace-pre opacity-100"
                        data-framer-component-type="RichTextContainer"
                      >
                        <h5
                          className="font-urbanist text-xl font-semibold text-black text-center md:text-left"
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
                          className="text-lg font-inter font-normal text-[#616161] text-center md:text-left"
                          data-styles-preset="UCvrJxnzN"
                        >
                          Contact us. Your feedback matters. Let&apos;s build a
                          better future together.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex md:grid lg:flex flex-col flex-none lg:items-center gap-[28px] h-min w-full overflow-hidden p-0 relative ${
                        deviceType === "tablet" &&
                        "grid auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(2,minmax(0px,1fr))]"
                      }`}
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
                              className="text-xl font-urbanist font-semibold text-black text-center md:text-left"
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
                            className="text-lg font-inter font-normal text-[#616161] text-center md:text-left"
                            data-styles-preset="UCvrJxnzN"
                          >
                            Pune, Maharashtra,{" "}
                            <br className="hidden lg:block" />
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
                              className="text-xl font-urbanist font-semibold text-black text-center md:text-left"
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
                            className="text-lg font-inter font-normal text-[#616161] text-center md:text-left"
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
                              className="text-xl font-urbanist font-semibold text-black text-center md:text-left"
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
                            className="text-lg font-inter font-normal text-[#616161] text-center md:text-left"
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
                    className="flex flex-col lg:flex-[1_0_0px] items-center gap-5 h-min w-full lg:w-px overflow-visible p-0 relative"
                    data-framer-name="Form Content"
                  >
                    <form className="flex flex-col items-start gap-5 flex-[0_0_auto] h-min w-full overflow-visible p-0 relative">
                      <div
                        className="flex flex-col items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                        data-framer-name="Input Content"
                      >
                        <div
                          className="flex flex-col md:flex-row items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                          data-framer-name="Name"
                        >
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-full md:w-px overflow-visible p-0 relative"
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
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-full md:w-px overflow-visible p-0 relative"
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
                          className="flex flex-col md:flex-row items-center gap-6 flex-none h-min w-full overflow-visible p-0 relative"
                          data-framer-name="Phone + Email"
                        >
                          <div
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-full md:w-px overflow-visible p-0 relative"
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
                            className="flex flex-col items-start justify-start flex-1 gap-[10px] h-min w-full md:w-px overflow-visible p-0 relative"
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
