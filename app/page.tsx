import { getStrapiData } from "@/lib/strapi";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { UseCases } from "@/components/sections/UseCases";
import { PainPoints } from "@/components/sections/PainPoints";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CallToAction } from "@/components/sections/CallToAction";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default async function Home() {
  const data = await getStrapiData();

  return (
    <div className="min-h-screen font-sans relative">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero data={data?.hero} />
        <SocialProof data={data?.socialProof} />
        <UseCases data={data?.useCases} />
        <PainPoints data={data?.painPoints} />
        <WhyUs data={data?.whyUs} />
        <HowItWorks data={data?.howItWorks} />
        <Benefits data={data?.benefits} />
        <Pricing data={data?.pricing} />
        <FAQ data={data?.faq} />
        <CallToAction data={data?.cta} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
