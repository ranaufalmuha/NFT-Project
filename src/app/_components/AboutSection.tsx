import Heading2 from "@/shared/components/ui/Heading2";
import React from "react";

export default function AboutSection() {
  return (
    <section className="max-w-7xl w-full px-8 mx-auto py-28 flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <Heading2 text="About the Project" className="" />
        <p className="text-4xl leading-normal">
          This project reimagines anime NFTs for a cyberpunk future: three core
          characters, medium-chibi proportions (around 5-head tall), and a
          generative system that can scale from tens of thousands to potentially
          100,000+ unique pieces.
        </p>
      </div>
    </section>
  );
}
