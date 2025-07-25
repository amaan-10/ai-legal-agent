"use client";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface BenefitCardProps extends HTMLAttributes<HTMLDivElement> {
  iconSrc: string;
  title: string;
  description: string;
}

const tags = [
  "AI Contract Review",
  "Instant Compliance",
  "Data Privacy",
  "Legal Automation",
  "Audit Ready",
];

const benefitsData = [
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/XAIxkihWOZVlT9kYlzBcnurjec-16.svg",
    title: "24/7 Legal Assistant",
    description:
      "Access always-on AI to answer legal questions, analyze documents, and provide insights instantly.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/8tzMEDhkyb6h4U0ZUlqPZRqepKc-17.svg",
    title: "Automated Compliance",
    description:
      "Monitor latest regulations and receive compliance status updates for peace of mind.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/8RLZFxPukLFRCHBBmD6kM5D66U-18.svg",
    title: "Tailored Legal Workflows",
    description:
      "Adapt processes and document templates for your firm or company with simple customization.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/wYkPH8gBYt8UN08jzakhPV4n1U-19.svg",
    title: "Accelerated Contract Drafting",
    description:
      "Generate, review, and finalize contracts in minutes with smart AI suggestions and error detection.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/gqLs6V6iWyNKoDXEQR7BUYkh9g-20.svg",
    title: "User Friendly",
    description:
      "Intuitive dashboard for lawyers, paralegals, and business teams without the learning curve.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/EvEdeWvMF3lgbWApozJJhFHm9M-21.svg",
    title: "Bank-Grade Security",
    description:
      "Your confidential legal data is protected with encryption and strict access controls.",
  },
];

const BenefitCard: FC<BenefitCardProps> = ({ iconSrc, title, description }) => (
  <div className="flex-none h-auto relative w-full">
    <div
      className="flex flex-col flex-nowrap items-center justify-start gap-4 overflow-visible relative w-full h-min pl-6 opacity-100"
      data-framer-name="Mobile"
    >
      <div
        className="absolute left-0 top-0 h-[120px] w-1 overflow-visible z-[1] opacity-100"
        data-framer-name="Glow"
      >
        <div
          className="absolute left-0 right-0 top-0 h-[42px] bg-[#FE6A2E] rounded-sm overflow-visible z-[1] opacity-100"
          data-framer-name="Paint"
        ></div>
        <div
          className="absolute left-0 right-0 bottom-[-5px] h-[118px] bg-gradient-to-b from-[#FE6A2E] to-[rgba(171,171,171,0.07)] opacity-50 overflow-hidden z-[1]"
          data-framer-name="Flare"
        ></div>
      </div>
      <div
        className="relative flex flex-row items-center justify-start gap-[17px] w-full h-min overflow-visible p-0"
        data-framer-name="Heading"
      >
        <div
          className="relative flex flex-row items-center justify-center gap-[10px] w-[46px] h-[46px] p-0 rounded-[200px] border border-solid border-[rgb(243,243,241)] bg-[radial-gradient(64%_31%_at_50%_50%,_rgb(240,236,231)_0%,_rgb(255,255,255)_100%)] opacity-100"
          data-border="true"
          data-framer-name="Icon Wrap"
        >
          <div
            className="relative w-[20px] h-[20px] overflow-visible rounded-[3px] opacity-100"
            data-framer-name="Icon"
          >
            <div
              data-framer-background-image-wrapper="true"
              className="absolute inset-0 rounded-inherit"
            >
              <Image
                decoding="async"
                src={iconSrc}
                width={32}
                height={32}
                alt=""
                className="block w-full h-full object-cover object-center"
                style={{ borderRadius: "inherit" }}
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start shrink-0 transform-none opacity-100 relative whitespace-pre w-auto h-auto outline-none"
          data-framer-component-type="RichTextContainer"
        >
          <h3
            className="font-urbanist text-2xl font-semibold text-[#111111]"
            data-styles-preset="mnefNh2fC"
          >
            {title}
          </h3>
        </div>
      </div>
      <div
        className="outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 h-auto relative whitespace-pre-wrap w-full break-words"
        data-framer-component-type="RichTextContainer"
      >
        <p
          className="text-lg font-normal text-[#616161]"
          data-styles-preset="UCvrJxnzN"
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-[90px_60px] w-full h-min overflow-visible relative">
      <div className="flex flex-row items-start justify-center gap-[60px] w-full max-w-[1228px] h-min overflow-visible p-0 relative flex-none">
        <div className="flex flex-col items-start justify-center gap-6 w-px max-w-[530px] h-min overflow-visible p-0 sticky top-[60px] z-[1] will-change-transform flex-[1_0_0px]">
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
                    Benefits
                  </p>
                </div>
              </div>
            </span>
          </motion.div>
          <div
            className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none opacity-100 transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <motion.h2
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
              className=" text-[52px] font-urbanist text-[#111111] font-semibold"
              data-styles-preset="o4SbqhkD9"
            >
              AI Legal Operations, Automated Compliance, & Secure Document
              Handling
            </motion.h2>
          </div>

          <div
            className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none opacity-100 transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <motion.p
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
              className="text-base font-normal text-[#616161]"
              data-styles-preset="UCvrJxnzN"
            >
              Empower your legal team with automation, increase accuracy, and
              save time with instant contract review and compliance monitoring.
            </motion.p>
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
            className="flex flex-row flex-wrap items-start justify-start gap-[10px] p-[12px_20px] w-full h-min overflow-visible relative flex-none opacity-100 transform-none"
          >
            {tags.map((tag) => (
              <div key={tag} className="flex-none h-auto w-auto relative">
                <div
                  className="flex flex-row items-center justify-center gap-0 w-min h-min overflow-visible p-0 relative rounded-[32px] border border-solid opacity-100"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgb(243 243 241)",
                    background:
                      "linear-gradient(180deg, rgb(243, 243, 241) 50%, rgb(250, 250, 247) 100%)",
                  }}
                >
                  <div
                    className="flex flex-row items-center justify-center flex-none flex-nowrap gap-[10px] h-min w-min overflow-visible relative p-[12px_20px] rounded-[32px] opacity-100"
                    data-framer-name="Background"
                  >
                    <div
                      className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100 transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="text-[17px] font-urbanist font-medium text-[#111111]"
                        data-styles-preset="huFE_kN6t"
                      >
                        {tag}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col flex-[1_0_0px] flex-nowrap items-center justify-center gap-[54px] h-min w-px relative overflow-visible p-0 opacity-100 transform-none">
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
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col flex-none flex-nowrap items-center justify-center gap-[54px] h-min w-full relative overflow-visible pb-[90px] pt-0 px-0"
          >
            <div
              className="absolute left-[2px] top-[49.28%] w-px h-[98%] z-[1] overflow-visible flex-none"
              style={{
                background: `linear-gradient(90deg, rgba(232,232,229,0) 0%, rgb(240, 236, 231) 22.97%, rgb(240, 236, 231) 82.43%, rgba(232,232,229,0) 100%)`,
                top: `calc(49.2849284928493% - 97.7997799779978% / 2)`,
              }}
            />
            {benefitsData.map((benefit) => (
              <div key={benefit.title} className="contents">
                <BenefitCard {...benefit} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
