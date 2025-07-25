import Link from "next/link";
import * as React from "react";
import Image from "next/image";

const featuresLinks = [
  { name: "Benefits", href: "#" },
  { name: "Why Choose Us", href: "#" },
  { name: "How To Use", href: "#" },
  { name: "Pricing", href: "#" },
];

const pagesLinks = [
  { name: "Homepage", href: "/" },
  { name: "Contact", href: "#" },
  { name: "404 Page", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

const socialLinks = [
  { name: "Twitter(X)", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
];

const Footer = () => {
  return (
    <footer
      className="bg-[rgb(250,250,247)] opacity-100 flex flex-col flex-nowrap items-center justify-center content-center gap-0 h-min overflow-hidden px-[60px] pt-[60px] pb-[24px] relative w-full"
      data-framer-name="Desktop"
    >
      <div
        className="flex flex-col flex-nowrap items-center content-center justify-center gap-0 w-full  h-min overflow-visible p-0 relative flex-none"
        data-framer-name="Container"
      >
        <div
          className="flex flex-row flex-nowrap items-start content-start justify-between w-full h-min overflow-visible pb-[90px] p-0 relative flex-none"
          data-framer-name="Content"
        >
          <div
            className="flex flex-col flex-nowrap items-start content-start justify-center gap-6 h-min w-min overflow-visible p-0 relative flex-none"
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
              className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="text-[#616161] font-normal text-lg"
                data-styles-preset="UCvrJxnzN"
              >
                Streamline workflows and grow your business
                <br className="text-[#616161] font-normal text-lg" />
                with effective lead management.
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
                  className="text-[#616161] hover:text-[#111111] font-normal text-lg"
                  data-styles-preset="zyClEo6vE"
                  href="mailto:hello@gmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  hello.active@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div
            className="flex flex-row flex-nowrap items-start content-start justify-center gap-[80px] w-min h-min overflow-visible p-0 relative flex-none"
            data-framer-name="Menu"
          >
            <div
              className="flex flex-col flex-nowrap items-start content-start justify-center gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Features Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-lg"
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
                  className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative gap-3 whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {featuresLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-lg"
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
              className="flex flex-col flex-nowrap items-start content-start justify-center gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Features Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-lg"
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
                  className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto gap-3 relative whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {pagesLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-lg"
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
              className="flex flex-col flex-nowrap items-start content-start justify-center gap-[30px] w-min h-min overflow-visible p-0 relative flex-none"
              data-framer-name="Features Link"
            >
              <div
                className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative whitespace-pre opacity-100"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="text-[#111111] font-normal text-lg"
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
                  className="outline-none flex flex-col justify-start shrink-0 flex-none h-auto w-auto relative gap-3 whitespace-pre opacity-100 text-[#616161]"
                  data-framer-component-type="RichTextContainer"
                >
                  {socialLinks.map((link) => (
                    <p
                      key={link.name}
                      className="text-[#616161] font-normal text-lg"
                      data-styles-preset="UCvrJxnzN"
                    >
                      <Link
                        href={link.href}
                        className="text-[#616161] hover:text-[#111111] font-normal text-lg"
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
          className="flex flex-row flex-nowrap items-center content-center justify-between w-full h-min overflow-hidden pt-[24px] pb-0 px-0 relative flex-none"
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
                  href="./term-and-conditions"
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
