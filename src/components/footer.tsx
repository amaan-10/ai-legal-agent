import Link from "next/link";
import * as React from "react";
import Image from "next/image";

const featuresLinks = [
  { name: "Benefits", href: "/#benefits" },
  { name: "Why Choose Us", href: "/#why-choose-us" },
  { name: "How To Use", href: "/#how-to-use" },
  { name: "FAQ", href: "/#faq" },
];

const pagesLinks = [
  { name: "Homepage", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "404 Page", href: "/404" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  { name: "Twitter(X)", href: "https://x.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "GitHub", href: "https://github.com" },
];

const Footer = () => {
  return (
    <footer
      className="bg-[rgb(250,250,247)] opacity-100 flex flex-col flex-nowrap items-center justify-center content-center gap-0 h-min overflow-hidden px-5 md:px-[30px] lg:px-[60px] pt-[60px] pb-[24px] relative w-full"
      data-framer-name="Desktop"
    >
      <div
        className="flex flex-col flex-nowrap items-center content-center justify-center gap-0 w-full  h-min overflow-visible p-0 relative flex-none"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col lg:flex-row flex-nowrap items-start md:items-center gap-10 lg:gap-0 lg:items-start content-start justify-between w-full h-min overflow-visible pb-[35px] md:pb-[60px] lg:pb-[90px] p-0 relative flex-none"
          data-framer-name="Content"
        >
          <div
            className="flex flex-col flex-nowrap items-start md:items-center lg:items-start content-start justify-center gap-6 h-min w-full md:w-min overflow-visible p-0 relative flex-none"
            data-framer-name="Right Content"
          >
            <div
              className="flex-none h-[33px] w-[114px] overflow-visible relative"
              data-framer-name="Logo"
            >
              <div
                className="absolute inset-0"
                data-framer-background-image-wrapper="true"
              >
                <Image
                  width={100}
                  height={100}
                  decoding="async"
                  src="/images/Nyāyik.png"
                  alt=""
                  className="block w-full h-full rounded-inherit object-cover object-center"
                />
              </div>
            </div>
            <div
              className="outline-none flex flex-col justify-start md:shrink-0 flex-none h-auto w-auto relative md:whitespace-pre opacity-100"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="text-[#616161] font-normal text-base lg:text-lg text-left md:text-center lg:text-left font-urbanist"
                data-styles-preset="UCvrJxnzN"
              >
                Streamline legal processes and enhance client service{" "}
                <br className="hidden md:block" />
                with intelligent AI-powered assistance.
              </p>
            </div>
            <div
              className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="text-[#616161] hover:text-[#111111] font-normal text-lg"
                data-styles-preset="UCvrJxnzN"
              >
                <a
                  className="text-[#616161] hover:text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                  data-styles-preset="zyClEo6vE"
                  href="mailto:hello.nyayik@gmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  hello.nyayik@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row flex-nowrap items-start content-start justify-start md:justify-around lg:justify-center gap-[32px] md:gap-0 lg:gap-[80px] w-full lg:w-min h-min overflow-visible p-0 relative flex-none"
            data-framer-name="Menu"
          >
            <div
              className="flex flex-col flex-nowrap items-start md:items-center lg:items-start content-start justify-center gap-4 md:gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Features Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                  data-styles-preset="UCvrJxnzN"
                >
                  Features
                </p>
              </div>
              <div
                className="flex flex-col flex-nowrap items-start content-start justify-center self-stretch gap-3 h-min w-auto overflow-visible p-0 relative flex-none"
                data-framer-name="Page Link Item"
              >
                <div
                  className="outline-none flex flex-col items-start md:items-center lg:items-start justify-start shrink-0 flex-none h-auto w-auto relative gap-3 whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {featuresLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-base lg:text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                        data-styles-preset="zyClEo6vE"
                      >
                        {link.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col flex-nowrap items-start md:items-center lg:items-start content-start justify-center gap-4 md:gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Pages Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                  data-styles-preset="UCvrJxnzN"
                >
                  Pages
                </p>
              </div>
              <div
                className="flex flex-col flex-nowrap items-start content-start justify-center self-stretch gap-3 h-min w-auto overflow-visible p-0 relative flex-none"
                data-framer-name="Page Link Item"
              >
                <div
                  className="outline-none flex flex-col items-start md:items-center lg:items-start justify-start shrink-0 flex-none h-auto w-auto gap-3 relative whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {pagesLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-base lg:text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                        data-styles-preset="zyClEo6vE"
                      >
                        {link.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col flex-nowrap items-start md:items-center lg:items-start content-start justify-center gap-4 md:gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Socal Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                  data-styles-preset="UCvrJxnzN"
                >
                  Social
                </p>
              </div>
              <div
                className="flex flex-col flex-nowrap items-start content-start justify-center self-stretch gap-3 h-min w-auto overflow-visible p-0 relative flex-none"
                data-framer-name="Page Link Item"
              >
                <div
                  className="outline-none flex flex-col items-start md:items-center lg:items-start justify-start shrink-0 flex-none h-auto w-auto relative gap-3 whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {socialLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-base lg:text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-base lg:text-lg font-urbanist"
                        data-styles-preset="zyClEo6vE"
                      >
                        {link.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-framer-name="Divider"
          className="flex-none h-px w-full overflow-visible relative opacity-100"
          style={{
            background: `linear-gradient(
      rgba(240, 236, 231, 0.1) 2.7027%,
      rgba(240, 236, 231, 0.9) 16.6667%,
      rgba(240, 236, 231, 0.9) 86.9369%,
      rgba(240, 236, 231, 0.1) 100%
    )`,
          }}
        ></div>
        <div
          className="flex flex-col md:flex-row flex-nowrap items-start md:items-center gap-2 md:gap-0 content-center justify-between w-full h-min overflow-hidden pt-[24px] pb-0 px-0 relative flex-none"
          data-framer-name="Copyright"
        >
          <div
            className="flex flex-row flex-nowrap items-center content-center justify-center gap-[60px] h-min overflow-visible p-0 relative flex-none"
            data-framer-name="Terms"
          >
            <div
              className="outline-none flex flex-col justify-start shrink-0 opacity-100"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="text-[#616161] hover:text-[#111111] font-normal text-base"
                data-styles-preset="y6TpHoXJq"
              >
                <a
                  className="text-[#616161] hover:text-[#111111] font-normal text-base"
                  data-styles-preset="zyClEo6vE"
                  href="/terms-and-conditions"
                >
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
          <div
            className="text-[#616161] hover:text-[#111111] font-normal text-base"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="text-[#616161] hover:text-[#111111] font-normal text-base"
              data-styles-preset="y6TpHoXJq"
            >
              Copyright Nyāyik. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
