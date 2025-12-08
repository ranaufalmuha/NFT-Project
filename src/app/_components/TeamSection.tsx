import BigP from "@/shared/components/ui/BigP";
import Heading2 from "@/shared/components/ui/Heading2";

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-4 flex flex-col gap-12">
      <div className="w-full flex justify-center flex-col items-start gap-2">
        <Heading2 text="Our Team" className="" />
        <BigP
          text="This project reimagines anime NFTs for a cyberpunk future: three core
                  characters, medium-chibi proportions (around 5-head tall), and a
                  generative system that can scale from tens of thousands to potentially
                  100,000+ unique pieces."
        />
      </div>

      <div className="w-full flex h-[80dvh] gap-8 relative">
        <div className="h-full aspect-1/2 absolute left-1/4 -translate-x-1/4">
          <img
            src="/images/contents/team-1.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-full aspect-1/2 absolute left-3/4 -translate-x-3/4">
          <img
            src="/images/contents/team-2.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
