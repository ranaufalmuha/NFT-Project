import { CharacterDetail } from "@/shared/interfaces/character";
import Image from "next/image";
import React from "react";

export default function CharacterCard({
  character,
}: {
  character: CharacterDetail;
}) {
  return (
    <div className="bg-linear-to-t from-card/50 to-card aspect-3/4 w-full max-w-3xl relative ">
      <div className="bg-black w-full h-full -z-1 absolute"></div>
      <div
        className="bg-white/40 backdrop-blur-2xl text-background w-full aspect-4/3 scale-110 absolute top-0 left-0"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 0, 100% 70%,85% 100%, 0 100%, 0 25%, 35% 25%)",
        }}
      >
        <div className="absolute right-0 p-4 font-sefa">
          <span className="text-4xl">12</span>
          <span>y.o</span>
        </div>
        <span className="top-[25%] absolute text-[5rem] font-sefa p-4 uppercase">
          {character.name}
        </span>
      </div>

      <Image
        className="absolute top-[15%] w-full aspect-3/4 object-contain right-0"
        src={character.imageUrl}
        alt={character.name + " Image"}
        width={720}
        height={720}
      />
    </div>
  );
}
