"use client";

import Image from "next/image";
import { useState } from "react";

const listCharacter = [
  {
    name: "Zynko",
    imageUrl: "/images/character/1.png",
    profileImageUrl: "/images/character/p-1.png",
    background:
      "https://cdna.artstation.com/p/assets/images/images/065/502/050/large/mauro-monge-skate-final-noite-5.jpg?1690509076",
    color: "text-accent-1",
    fromColor: "from-accent-1",
  },
  {
    name: "Tynko",
    imageUrl: "/images/character/2.png",
    profileImageUrl: "/images/character/p-2.png",
    background:
      "https://images.stockcake.com/public/6/4/4/644eb1a8-7952-4696-94e6-225fa0942cae_large/cyberpunk-aurora-dreams-stockcake.jpg",
    color: "text-accent-2",
    fromColor: "from-accent-2",
  },
  {
    name: "Lynko",
    imageUrl: "/images/character/3.png",
    profileImageUrl: "/images/character/p-3.png",
    background:
      "https://s.yimg.com/ny/api/res/1.2/CNeCP1GLnYV_mulG8nls5Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzM0O2NmPXdlYnA-/https://media.zenfs.com/en/variety.com/7448cf8e8dad38303fbce677c02ee5eb",
    color: "text-accent-3",
    fromColor: "from-accent-3",
  },
];

export default function SwitchCharacterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl flex flex-col w-full gap-6 relative overflow-hidden px-4">
      {/* hero character */}
      <div className="w-full aspect-video relative flex justify-end overflow-hidden">
        <img
          src={listCharacter[activeIndex].background}
          className="w-full h-full absolute z-1 object-cover"
          alt=""
        />
        <h2
          className={`absolute z-4 top-0 font-sefa uppercase ${listCharacter[activeIndex].color} flex items-center w-full h-full p-4`}
          style={{ fontSize: "15vmin" }}
        >
          {listCharacter[activeIndex].name}
        </h2>
        <div
          className={`bg-linear-to-l ${listCharacter[activeIndex].fromColor} aspect-2/3 h-full z-3`}
        ></div>
        <div className="absolute h-full aspect-4/5 z-5 right-0 p-4">
          <Image
            src={listCharacter[activeIndex].imageUrl}
            alt={listCharacter[activeIndex].name}
            className="w-full h-full object-contain"
            draggable={false}
            width={720}
            height={1280}
          />
        </div>
        {/* list character (strip di kanan bawah) */}
        <div className="absolute left-0 bottom-0 w-1/2 md:w-1/3 overflow-visible z-10 p-4">
          <div className="flex items-center gap-1 overflow-visible">
            {listCharacter.map((char, index) => (
              <ParallelogramItem
                key={char.name}
                img={char.profileImageUrl}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParallelogramItem({
  img,
  isActive,
  onClick,
}: {
  img: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const polygon = "12,0 100,0 88,60 0,60";

  // build sekali biar rapi
  const maskSvg = encodeURIComponent(
    `<svg viewBox='0 0 100 60' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><polygon points='${polygon}' fill='white'/></svg>`
  );
  const maskUrl = `url("data:image/svg+xml,${maskSvg}")`;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-14 flex-1 overflow-visible cursor-pointer focus:outline-none"
    >
      {/* gambar dengan mask jajar genjang */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "0 0",
          maskPosition: "0 0",
        }}
      >
        <Image
          src={img}
          alt=""
          className={`w-full h-full object-cover block scale-350 ${
            isActive ? "scale-400" : "group-hover:scale-400"
          } duration-300`} // bisa kamu adjust
          width={1280}
          height={780}
          draggable={false}
        />
      </div>

      {/* border kuning jajar genjang */}
      <svg
        viewBox="0 0 100 60"
        className="absolute inset-0 w-full h-full overflow-visible block pointer-events-none"
        preserveAspectRatio="none"
      >
        <polygon
          points={polygon}
          fill="none"
          strokeWidth={5}
          strokeLinejoin="round"
          style={{ vectorEffect: "non-scaling-stroke" }}
          className={
            "transition-opacity duration-150 stroke-primary " +
            (isActive ? "opacity-100" : "opacity-0")
          }
        />
      </svg>
    </button>
  );
}
