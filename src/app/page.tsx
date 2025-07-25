import Benefits from "@/components/benefits";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowToUse from "@/components/howToUse";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <div>
      <main className=" min-h-[100vh] w-full relative flex flex-col flex-nowrap items-center justify-start gap-0 h-min overflow-visible bg-[#fefefe]">
        <Header />

        <Hero />

        <Features />

        <Benefits />

        <WhyUs />

        <HowToUse />

        <FAQ />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
