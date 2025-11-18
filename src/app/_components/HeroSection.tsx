/* eslint-disable @next/next/no-img-element */
import { PROJECT_NAME } from "@/shared/utils/const";
// import { LANDING_S1 } from "@/shared/utils/image";

export default function HeroSection() {
  return (
    <section className="w-full h-[85dvh] min-h-[600px] max-h-[1200px] flex items-center justify-center relative">
      <div className="w-4/5 max-lg:w-5/6 max-md:w-full p-4 max-md:text-center duration-300 z-20 max-w-7xl mx-auto">
        <h1 className="font-sefa text-9xl w-3/5 max-lg:w-4/5 max-md:w-full max-sm:text-7xl duration-300">
          {PROJECT_NAME}
        </h1>
      </div>
      {/* <img
        src={LANDING_S1}
        alt=""
        className="absolute w-1/2 h-full object-contain right-0 z-10"
      /> */}
      <img
        src="https://i.pinimg.com/originals/9c/02/51/9c0251bcbf1114821afc3551ddb64b00.gif"
        alt=""
        className="bg-white absolute w-full h-full object-cover"
        width={1920}
        height={1080}
      />
    </section>
  );
}
