import BigP from "@/shared/components/ui/BigP";
import Heading2 from "@/shared/components/ui/Heading2";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="mx-auto max-w-7xl w-full px-4 flex flex-col gap-12"
    >
      <div className="w-full flex justify-center flex-col items-start gap-2">
        <Heading2 text="Our Team" className="" />
        <BigP
          text="This project reimagines anime NFTs for a cyberpunk future: three core
                  characters, medium-chibi proportions (around 5-head tall), and a"
        />
      </div>

      <div className="w-full flex h-180 gap-8 relative">
        <div className="absolute flex justify-center w-full h-full ">
          <div className="flex justify-center group">
            <div
              className="h-full aspect-1/2 translate-x-1/5  transition duration-300
            group-hover:grayscale
            hover:grayscale-0 hover:scale-105 hover:z-50"
            >
              <img
                src="/images/contents/team-1.png"
                alt=""
                draggable={false}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="h-full aspect-1/2 -translate-x-1/5  transition duration-300
            group-hover:grayscale
            hover:grayscale-0 hover:scale-105 hover:z-5"
            >
              <img
                src="/images/contents/team-2.png"
                alt=""
                draggable={false}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
