import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Founder } from "@/components/home/Founder";
import { BodyAnalysis } from "@/components/features/BodyAnalysis";
import { Services } from "@/components/home/Services";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Introduction />
      <Founder />
      <BodyAnalysis />
      <Services />
      <Doctors />
      <Testimonials />
      <FAQ />
      {/* Other sections will go here */}
    </div>
  );
}
