"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import { CharacterDetail } from "@/shared/interfaces/character";
import { gsap, ScrollTrigger } from "@/shared/lib/gsap";

const listCharacter: CharacterDetail[] = [
  {
    name: "Blaze",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus quae non perspiciatis quas, soluta minus cumque a amet sint? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, dolorum!",
    hobby: "Skateboard",
    born: "2010",
    imageUrl: "/images/character/1.png",
    profileImageUrl: "/images/character/p-1.png",
  },
  {
    name: "Nova",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus quae non perspiciatis quas, soluta minus cumque a amet sint? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, dolorum!",
    hobby: "Rich",
    born: "2010",
    imageUrl: "/images/character/2.png",
    profileImageUrl: "/images/character/p-2.png",
  },
  {
    name: "Vex",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus quae non perspiciatis quas, soluta minus cumque a amet sint? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, dolorum!",
    hobby: "Hacker",
    born: "2010",
    imageUrl: "/images/character/3.png",
    profileImageUrl: "/images/character/p-3.png",
  },
];

export default function CharacterSection() {
  const characterCardRef = useRef<HTMLDivElement | null>(null);
  const cardStageRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  function transitionToIndex(nextIndex: number) {
    if (!cardStageRef.current) {
      setActiveIndex(nextIndex);
      return;
    }

    const current = activeIndexRef.current;
    if (nextIndex === current) return;

    const el = cardStageRef.current;

    // Kill tween lama supaya tidak numpuk kalau scroll cepat
    gsap.killTweensOf(el);

    gsap
      .timeline()
      .to(el, {
        opacity: 0,
        x: -30,
        scale: 0.98,
        duration: 0.25,
        ease: "power2.out",
      })
      .add(() => {
        setActiveIndex(nextIndex);
        activeIndexRef.current = nextIndex;
      })
      .set(el, { x: -16 })
      .to(el, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
      });
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin kiri (card besar)
      gsap.timeline({
        scrollTrigger: {
          trigger: characterCardRef.current,
          start: "top top",
          end: "+=200%", // 3 karakter x 1 layar
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ScrollTrigger per info di kanan
      const sections = gsap.utils.toArray<HTMLElement>(".card-character-info");

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "center bottom",
          end: "center center",
          onEnter: () => transitionToIndex(index),
          onEnterBack: () => transitionToIndex(index),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="character-section"
      className="flex flex-col w-full relative bg-background border-y border-white/20"
    >
      <div className="w-full h-full max-w-[1400px] relative flex justify-center items-center mx-auto">
        {/* LEFT: pinned character card */}
        <div
          ref={characterCardRef}
          className="absolute top-0 flex items-center w-full h-screen"
        >
          <div className="w-full md:w-3/4 xl:w-1/2 scale-80 duration-300">
            <div
              ref={cardStageRef}
              className="character-card-stage will-change-transform"
            >
              <CharacterCard character={listCharacter[activeIndex]} />
            </div>
          </div>
        </div>

        {/* RIGHT: scrollable info sections */}
        <div className="w-full h-[300dvh] max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl z-5 p-8 flex flex-col items-end top-0">
          {listCharacter.map((c, i) => (
            <CardCharacterInfo key={i} character={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardCharacterInfo({
  character,
  index,
}: {
  character: CharacterDetail;
  index: number;
}) {
  return (
    <div
      className="card-character-info h-screen flex flex-col justify-center"
      data-index={index}
    >
      <div className="ml-auto flex flex-col gap-6 backdrop-blur-2xl bg-muted/20 p-8 border border-white/10 max-w-[450px]">
        <div className="flex flex-col gap-6">
          <h2
            className={`font-sefa uppercase flex items-center w-full text-5xl`}
          >
            {character.name}
          </h2>

          <div className="flex flex-col gap-4 text-justify mt-4">
            <h3 className="uppercase text-sm text-muted-foreground font-bold hidden">
              info
            </h3>
            <p>{character.info}</p>
            <hr className="border-t border-white/10" />
            <h3 className="uppercase text-sm text-muted-foreground font-bold hidden">
              hobby
            </h3>
            <p>{character.hobby}</p>
            <hr className="border-t border-white/10" />
            <h3 className="uppercase text-sm text-muted-foreground font-bold hidden">
              born
            </h3>
            <p>{character.born}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
