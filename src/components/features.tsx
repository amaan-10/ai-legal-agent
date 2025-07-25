"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCardData {
  iconSrc: string;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  delay?: number;
}

const features: FeatureCardData[] = [
  {
    title: "AI-Powered Legal Research",
    description:
      "Instantly scan laws and databases with AI to find the most relevant insights.",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/XBuXmqS11zJWm9Z9ADQGF1MwEAg-15.svg",
    imageSrc: "/images/legal-research.png",
    imageWidth: 342,
    imageHeight: 201,
  },
  {
    title: "Real-Time Regulation Updates",
    description:
      "Track legal policies, and alerts across regions, tailored to your domain.",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/k6femoT7icmuqmWn0BhOEtCzIo-12.svg",
    imageSrc: "/images/updates.png",
    imageWidth: 342,
    imageHeight: 201,
  },
  {
    title: "Smart Legal Document Drafting",
    description:
      "Create tailored legal drafts and contracts using simple language prompts.",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/J99C1i2fb1NT2M6psXb0G98jgk-13.svg",
    imageSrc: "/images/document-drafting.png",
    imageWidth: 342,
    imageHeight: 201,
  },
  {
    title: "Confidential Case File Management",
    description:
      "Securely manage sensitive data with AI-powered classification, access control, and encryption.",
    iconSrc:
      "https://framerusercontent.com/images/z9eeQbNcppvcl4QdU6fEIlWyig.svg",
    imageSrc: "/images/file-management.png",
    imageWidth: 527,
    imageHeight: 242,
  },
  {
    title: "24/7 Virtual Legal Assistant",
    description:
      "Your AI legal assistant for queries, workflow help, and instant references—like a legal intern on call.",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f340970-637f-4ee0-9cad-2887fcc2642a-active-saas-framer-website/assets/svgs/UX7V6iQCHgJV9wGD6nh5qQJEa8-14.svg",
    imageSrc: "/images/virtual-legal-assistant.png",
    imageWidth: 527,
    imageHeight: 242,
  },
];

const FeatureCard = ({
  iconSrc,
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
  delay,
}: FeatureCardData) => {
  return (
    <div className="flex-[1_0_0px] relative h-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 210,
          damping: 70,
          delay: delay,
          duration: 0.7,
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="w-full opacity-100 rounded-[30px] bg-[linear-gradient(180deg,_rgb(243,243,241)_54.93%,_rgb(250,250,247)_100%)] flex flex-col overflow-hidden relative"
      >
        <div className="flex flex-col flex-[1_0_0px] items-center justify-center gap-[22px] h-min w-full overflow-visible p-[43px_28px_0] relative rounded-[30px] opacity-100">
          <div
            className="flex flex-row items-start content-start justify-center gap-[25px] w-full h-min overflow-visible px-[10px] relative flex-none"
            data-framer-name="Text Icon"
          >
            <div
              className="flex flex-col items-center content-center justify-center flex-[1_0_0px] gap-[10px] h-min w-[1px] overflow-visible p-0 relative"
              data-framer-name="Title And Description"
            >
              <div
                className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words"
                data-framer-component-type="RichTextContainer"
              >
                <h3
                  className="text-2xl font-urbanist font-semibold text-[#111111]"
                  data-styles-preset="mnefNh2fC"
                >
                  {title}
                </h3>
              </div>
              <div
                className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words"
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
            <div
              className="flex flex-col items-center justify-center gap-[10px] overflow-hidden p-0 relative w-[53px] h-[53px] rounded-[27.38px] bg-[radial-gradient(75%_35%_at_50%_50%,_rgb(240,236,231)_0%,_rgb(255,255,255)_100%)]"
              data-border="true"
              data-framer-name="Icon Wrap"
            >
              <div
                className="flex-none w-[31px] h-[31px] relative overflow-visible rounded-[4px] opacity-100"
                data-framer-name="Icon"
              >
                <div
                  data-framer-background-image-wrapper="true"
                  className="absolute inset-0"
                >
                  <Image
                    src={iconSrc}
                    alt={`${title} icon`}
                    width={24}
                    height={24}
                    className="block w-full h-full rounded-inherit object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[1.456140350877193/1] flex-none h-[228px] overflow-visible relative w-full">
            <div className="absolute inset-0">
              <Image
                className="block rounded-inherit object-contain object-[center_top]"
                src={imageSrc}
                alt={`${title} dashboard mockup`}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Features() {
  return (
    <section
      id="valuable-feature"
      className="flex flex-col items-center justify-center gap-[10px] px-[60px] py-[90px] h-min overflow-hidden relative w-full"
    >
      <div className="flex flex-col items-center justify-center gap-[60px] w-full h-min max-w-[1228px] overflow-hidden p-0 relative">
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
                    Valuable Feutures
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
              className="text-[52px] font-urbanist font-semibold"
              data-styles-preset="o4SbqhkD9"
            >
              Customizable Solutions for Every Need
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
              viewport={{ once: true, amount: 0.6 }}
              className=" text-[#616161] font-normal text-lg text-center"
              data-styles-preset="UCvrJxnzN"
            >
              Empower your legal operations with an AI Agent Advisor offering
              flexible, scalable solutions tailored to your unique practice
              needs.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center content-center justify-center gap-10 h-min w-full overflow-hidden p-0 relative">
          <div className="flex flex-row flex-nowrap items-start content-start justify-center gap-8 h-min w-full overflow-hidden p-0 relative">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={0 + 0.2 * index} />
            ))}
          </div>
          <div className="flex flex-row flex-nowrap items-center content-center justify-center gap-8 h-min w-full overflow-hidden p-0 relative">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={0 + 0.2 * index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
