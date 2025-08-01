"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LadyJustice from "../../public/images/lady-justice.png";
import Gavel from "../../public/images/gavel.png";
import { easeInOut } from "framer-motion";
import Link from "next/link";
import { useResponsiveState } from "@/lib/useResponsiveState";
import { useSession } from "next-auth/react";

const heading =
  "Your AI Legal Agent for Effortless Compliance & Document Automation";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};

const Hero = () => {
  const deviceType = useResponsiveState();
  const { data: session } = useSession();

  return (
    <section
      className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden w-full"
      id="hero"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] sm:w-[100%] aspect-square">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(255,87,34,0.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="absolute -left-12 md:left-0 -right-12 md:right-0 -top-24 lg:top-0 z-[1] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min min-h-[350px] overflow-hidden p-0 flex-none">
        <div
          className="flex-none h-auto -left-3 absolute -top-5 w-[434px] z-[1]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div
            className="h-[331px] overflow-hidden relative"
            data-framer-name="Variant 1"
            style={{ width: "100%", opacity: 1 }}
          >
            <div
              className="absolute top-[-48px] right-[31px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 flex-none"
              data-framer-name="Wide Elipse"
              style={{ filter: "blur(35px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1227"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  fill: "rgb(0, 0, 0)",
                  color: "rgb(0, 0, 0)",
                  opacity: 1,
                }}
                className="flex-none relative h-[69px] w-[302px]"
                aria-hidden="true"
              >
                <div
                  className="svgContainer"
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "inherit",
                  }}
                >
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    viewBox="0 0 302 69"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                  >
                    <use href="#svg656739424_398" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[-86px] right-[-151px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[257px] w-[298px] overflow-hidden p-0 flex-none"
              data-framer-name="Elipse 1"
              style={{ filter: "blur(50px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1230"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20303%20205%22%3E%3Cpath%20d%3D%22M%20302.247%20102.971%20C%20302.247%2046.638%20234.759%200.971%20151.509%200.971%20C%2068.259%200.971%200.771%2046.638%200.771%20102.971%20C%200.771%20159.304%2068.259%20204.971%20151.509%20204.971%20C%20234.759%20204.971%20302.247%20159.304%20302.247%20102.971%20Z%22%20fill%3D%22rgb(255%2C150%2C55)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[205px] w-[303px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-100px] right-[50px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-min w-min overflow-visible p-0 flex-none"
              data-framer-name="Elipse 2"
              style={{ filter: "blur(50px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1229"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[350px] w-[288px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-32px] right-[-6px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 flex-none"
              data-framer-name="Light Elipse 1"
              style={{ opacity: "0.6" }}
            >
              <div
                className="flex-none relative h-[221px] w-[18px]"
                data-framer-name="Ellipse"
                style={{
                  background:
                    "linear-gradient(180.148deg, rgb(254, 236, 173) -18%, rgba(255, 154, 58, 0) 80%)",
                  borderRadius: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  filter: "blur(3.5px)",
                  transform: "rotate(-20deg)",
                  opacity: 1,
                }}
              />
            </div>
            <div
              className="absolute top-[-110px] md:top-[-56px] left-[calc(48.47826086956524%-124.31040564373899px/2)] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[312px] w-[124px] overflow-hidden p-0 flex-none"
              data-framer-name="Light 3"
              style={{ filter: "blur(8px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle 8416"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[337px] w-[134px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-110px] md:top-[-50px] left-[90px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 flex-none"
              data-framer-name="Light 2"
              style={{
                filter: "blur(6px)",
                transform: "rotate(7deg)",
                opacity: 1,
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle 8417"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[328px] w-[135px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-62px] right-[61px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(10px)",
                WebkitFilter: "blur(10px)",
                opacity: "0.6",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[328px] w-[135px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[61px] right-[123px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(8px)",
                WebkitFilter: "blur(8px)",
                opacity: "0.6",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[218px] w-[90px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[36px] right-[27px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(8px)",
                opacity: "0.6",
                transform: "rotate(-5deg)",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[218px] w-[90px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="flex-none h-auto -right-3 absolute -top-5 w-[434px] z-[1]">
          <div
            className="h-[331px] overflow-hidden relative"
            data-framer-name="Variant 1"
            style={{ width: "100%", opacity: 1 }}
          >
            <div
              className="absolute top-[-48px] right-[31px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 flex-none"
              data-framer-name="Wide Elipse"
              style={{ filter: "blur(35px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1227"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  fill: "rgb(0, 0, 0)",
                  color: "rgb(0, 0, 0)",
                  opacity: 1,
                }}
                className="flex-none relative h-[69px] w-[302px]"
                aria-hidden="true"
              >
                <div
                  className="svgContainer"
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "inherit",
                  }}
                >
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    viewBox="0 0 302 69"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                  >
                    <use href="#svg656739424_398" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[-86px] right-[-151px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[257px] w-[298px] overflow-hidden p-0 flex-none"
              data-framer-name="Elipse 1"
              style={{ filter: "blur(50px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1230"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20303%20205%22%3E%3Cpath%20d%3D%22M%20302.247%20102.971%20C%20302.247%2046.638%20234.759%200.971%20151.509%200.971%20C%2068.259%200.971%200.771%2046.638%200.771%20102.971%20C%200.771%20159.304%2068.259%20204.971%20151.509%20204.971%20C%20234.759%20204.971%20302.247%20159.304%20302.247%20102.971%20Z%22%20fill%3D%22rgb(255%2C150%2C55)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[205px] w-[303px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-100px] right-[50px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-min w-min overflow-visible p-0 flex-none"
              data-framer-name="Elipse 2"
              style={{ filter: "blur(50px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Ellipse 1229"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[350px] w-[288px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-32px] right-[-6px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 flex-none"
              data-framer-name="Light Elipse 1"
              style={{ opacity: "0.6" }}
            >
              <div
                className="flex-none relative h-[221px] w-[18px]"
                data-framer-name="Ellipse"
                style={{
                  background:
                    "linear-gradient(180.148deg, rgb(254, 236, 173) -18%, rgba(255, 154, 58, 0) 80%)",
                  borderRadius: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  filter: "blur(3.5px)",
                  transform: "rotate(-20deg)",
                  opacity: 1,
                }}
              />
            </div>
            <div
              className="absolute top-[-110px] md:top-[-56px] left-[calc(48.47826086956524%-124.31040564373899px/2)] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[312px] w-[124px] overflow-hidden p-0 flex-none"
              data-framer-name="Light 3"
              style={{ filter: "blur(8px)", opacity: 1 }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle 8416"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[337px] w-[134px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-110px] md:top-[-50px] left-[90px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 flex-none"
              data-framer-name="Light 2"
              style={{
                filter: "blur(6px)",
                transform: "rotate(7deg)",
                opacity: 1,
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle 8417"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[328px] w-[135px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[-62px] right-[61px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(10px)",
                WebkitFilter: "blur(10px)",
                opacity: "0.6",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[328px] w-[135px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[61px] right-[123px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(8px)",
                WebkitFilter: "blur(8px)",
                opacity: "0.6",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[218px] w-[90px]"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute top-[36px] right-[27px] flex flex-row flex-nowrap items-center content-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 flex-none"
              data-framer-name="Light"
              style={{
                filter: "blur(8px)",
                opacity: "0.6",
                transform: "rotate(-5deg)",
              }}
            >
              <div
                data-framer-component-type="SVG"
                data-framer-name="Rectangle"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: 0,
                  backgroundSize: "100% 100%",
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                  opacity: 1,
                }}
                className="flex-none relative h-[218px] w-[90px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto pt-5 md:pt-0 px-5">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center border border-gray-200 rounded-full py-1 pl-1.5 pr-4 mb-3 md:mb-6 text-sm font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <span className="bg-[#F3F3F1] font-normal text-[13px] lg:text-[15px] text-[#37312f] rounded-full px-3 py-0.5 mr-2">
              New
            </span>
            <div className="flex items-center gap-1.5">
              <Image
                src="https://framerusercontent.com/images/TgunDVjqN0wRJvpxpIaXtEofdL0.svg"
                alt="AI Features Icon"
                width={20}
                height={20}
                className="w-4 h-4"
              />
              <span className="font-normal text-sm lg:text-base text-[#37312f]">
                AI-Powered Legal Automation
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-urbanist font-semibold text-[32px] md:text-[38px] leading-[44px] sm:text-5xl lg:text-[56px] lg:leading-[1.1] max-w-[770px] md:max-w-[430px] lg:max-w-[800px] mx-auto tracking-tight"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {heading.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1.25,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="mt-4 md:mt-6 text-[#616161] text-base lg:text-lg max-w-[690px] md:max-w-[500px] lg:max-w-2xl mx-auto"
          >
            Streamline legal workflows, automate contract review, and ensure
            compliance — powered by the latest in AI legal technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1.5,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="mt-4 md:mt-6 flex flex-wrap flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 font-urbanist"
          >
            <div className="flex items-center gap-2 ">
              <div className="w-8 h-8 p-[7px] border rounded-full shadow-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  lang="en"
                  viewBox="0 0 15 15"
                >
                  <g
                    stroke="#FE6A2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.92"
                    clipPath="url(#a)"
                  >
                    <path d="M13.75 6.925V7.5a6.25 6.25 0 1 1-3.707-5.712" />
                    <path d="M13.75 2.501 7.5 8.757 5.625 6.882" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h15v15H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span className="font-medium text-base">
                Automated Document Review
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 p-[7px] border rounded-full shadow-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  lang="en"
                  viewBox="0 0 15 15"
                >
                  <g
                    stroke="#FE6A2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.92"
                    clipPath="url(#a)"
                  >
                    <path d="M13.75 6.925V7.5a6.25 6.25 0 1 1-3.707-5.712" />
                    <path d="M13.75 2.501 7.5 8.757 5.625 6.882" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h15v15H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-medium text-base">
                Instant Compliance Reports
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 p-[7px] border rounded-full shadow-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  lang="en"
                  viewBox="0 0 15 15"
                >
                  <g
                    stroke="#FE6A2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.92"
                    clipPath="url(#a)"
                  >
                    <path d="M13.75 6.925V7.5a6.25 6.25 0 1 1-3.707-5.712" />
                    <path d="M13.75 2.501 7.5 8.757 5.625 6.882" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h15v15H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-medium text-base">
                AI-Powered Legal Insights
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1.75,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none font-urbanist"
          >
            <div className="relative group">
              <Link
                className="flex flex-row flex-nowrap items-center justify-center content-center gap-[10px] px-7 py-[13px] h-min w-min relative overflow-visible cursor-pointer no-underline border-[0.5px] border-solid rounded-[18px] bg-[#111111] opacity-100"
                data-border="true"
                style={{
                  backgroundColor:
                    "var(--token-6b7284e5-c42c-4865-a174-119a0270b93c, rgb(17, 17, 17))",
                  boxShadow: `
      rgba(0, 0, 0, 0.1) 0px 0.48175px 1.25255px -1.16667px,
      rgba(0, 0, 0, 0.09) 0px 1.83083px 4.76015px -2.33333px,
      rgba(0, 0, 0, 0.043) 0px 8px 20.8px -3.5px,
      rgba(255, 255, 255, 0.49) 0px -2px 9px 0px inset,
      rgba(0, 0, 0, 0.2) 0px 0px 0px 2px
    `,
                }}
                href="/#valuable-feature"
                data-framer-name="Button Dark Icon Down"
              >
                <div
                  className="flex-none h-auto relative whitespace-pre w-auto"
                  style={
                    {
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                      opacity: 1,
                      "--extracted-r6o4lv": "rgb(250, 250, 247)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    } as React.CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p className=" font-medium text-[#FAFAF7]">Explore Nyayik</p>
                </div>
                <div
                  className="flex items-center justify-center flex-row flex-nowrap gap-[10px] flex-none h-min w-min min-h-[20px] min-w-[20px] overflow-hidden p-0 relative"
                  style={{ opacity: 1 }}
                >
                  <div className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[21px] group-hover:translate-y-[21px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(250, 250, 247))"
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
                      stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(250, 250, 247))"
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

            <div className=" relative group">
              <a
                className="flex flex-row  flex-nowrap  items-center  justify-center  cursor-pointer  gap-[10px]  h-min  w-min  overflow-visible  p-[13px_28px]  relative  no-underline border-[0.5px] border-[color:var(--token-bce65128-c730-4d42-bd10-7fec9aa84c24,_rgb(240,_236,_231))] border-solid rounded-[18px] opacity-100"
                data-border="true"
                style={{
                  backgroundColor:
                    "var(--token-f395e90f-e08f-456b-b155-0974850affb9, rgb(255, 255, 255))",
                  boxShadow: `
    0px 0px 0px -2.5px rgba(0, 0, 0, 0.13189),
    0px 0px 0px -5px rgba(0, 0, 0, 0),
    inset 0px -1px 4px 0px rgba(0, 0, 0, 0.15),
    0px 0px 0px 2px var(--token-caa7547d-cf57-44d3-92c2-01fcbf1068be, rgb(243, 243, 241))
  `,
                }}
                href={session ? "/chat" : "/auth/sign-up"}
                data-framer-name="Button Light Icon Up"
              >
                <div
                  className="flex-none h-auto relative whitespace-pre w-auto"
                  style={
                    {
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      "--extracted-r6o4lv":
                        "var(--token-19842158-0165-4ed7-949f-2bbc1e56d166, rgb(0, 0, 0))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      transform: "none",
                      opacity: 1,
                    } as React.CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="font-medium text-black"
                    data-styles-preset="huFE_kN6t"
                  >
                    {session ? "Ask Nyayik" : "Get Started"}
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
              </a>
            </div>
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              left: "40px",
              top: deviceType === "mobile" ? "250px" : "125px",
              width:
                deviceType === "mobile"
                  ? "120px"
                  : deviceType === "tablet"
                  ? "175px"
                  : "250px",
              height:
                deviceType === "mobile"
                  ? "110px"
                  : deviceType === "tablet"
                  ? "161px"
                  : "230px",
            }}
            initial={{
              opacity: 0,
              x: deviceType === "mobile" ? -100 : -150,
              rotate: 0,
            }}
            animate={{
              opacity: deviceType === "mobile" ? 0 : 1,
              x: deviceType === "mobile" ? 0 : -80,
              rotate: -8,
            }}
            transition={{
              duration: 1,
              delay: 2,
              bounce: 0.2,
              type: "spring",
              stiffness: 210,
              damping: 70,
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={LadyJustice}
              alt="Decorative"
              width={250}
              height={230}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              right: "50px",
              top: deviceType === "mobile" ? "200px" : "125px",
              width:
                deviceType === "mobile"
                  ? "120px"
                  : deviceType === "tablet"
                  ? "175px"
                  : "250px",
              height:
                deviceType === "mobile"
                  ? "110px"
                  : deviceType === "tablet"
                  ? "161px"
                  : "230px",
            }}
            initial={{ opacity: 0, x: 150, rotate: 0 }}
            animate={{
              opacity: deviceType === "mobile" ? 0 : 1,
              x: 80,
              rotate: 8,
            }}
            transition={{
              duration: 1,
              delay: 2,
              bounce: 0.2,
              type: "spring",
              stiffness: 210,
              damping: 70,
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={Gavel}
              alt="Decorative"
              width={250}
              height={230}
              className="w-full h-full "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
