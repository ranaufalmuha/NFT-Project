"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/shared/lib/gsap";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".hero-card");
      const heroWelcome = document.querySelector(
        ".hero-welcome"
      ) as HTMLElement | null;

      if (!heroWelcome || !cards.length) return;

      const initialPositions = [
        { xFactor: 0.1, yFactor: -0.14, scale: 0.9 },
        { xFactor: -0.25, yFactor: -0.5, scale: 0.7 },
        { xFactor: -0.2, yFactor: -0.65, scale: 0.8 },
        { xFactor: -0.1, yFactor: -0.7, scale: 0.7 },
        { xFactor: -0.08, yFactor: -0.5, scale: 0.5 },
        { xFactor: -0.3, yFactor: -0.2, scale: 0.5 },
        { xFactor: -0.75, yFactor: -0.07, scale: 0.8 },
        { xFactor: -1.2, yFactor: -0.06, scale: 0.6 },
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.from(
        cards,
        {
          x: (i) => {
            const w = window.innerWidth;
            const pos = initialPositions[i];
            return pos ? pos.xFactor * w : 0;
          },
          y: (i) => {
            const h = window.innerHeight;
            const pos = initialPositions[i];
            return pos ? pos.yFactor * h : 0;
          },
          scale: (i) => initialPositions[i]?.scale ?? 1,
          ease: "power2.out",
          duration: 1, // bagian pertama dari timeline
        },
        0
      );

      tl.to(".hero-welcome", { yPercent: -10 }, "<");

      tl.to(
        ".hero-gallery-container",
        {
          xPercent: -30,
          ease: "none",
          duration: 1,
        },
        ">"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-[300dvh]">
      <section className="h-screen overflow-hidden flex flex-col items-center justify-between relative">
        <div className=""></div>
        <div className="hero-welcome flex flex-col items-center gap-4 md:gap-6 lg:gap-8 z-10 px-4 duration-300 absolute h-full w-full justify-center">
          <span className="hero-eyebrow md:text-lg lg:text-xl duration-300">
            Welcome to the Neonverse
          </span>
          <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center max-w-6xl duration-300">
            A Futuristic NFT Universe and 100,000+ Possibilities
          </h1>

          {/* CTA  */}
          <Link
            href="/#character-section"
            className="max-md:text-sm lg:text-lg bg-card py-3 px-5 md:py-4 md:px-6  duration-300"
          >
            Explore Characters
          </Link>
        </div>

        {/* Gallery  */}
        <div className="hero-gallery-container  ml-auto flex gap-6 items-end justify-start w-[200vw] z-0">
          <div className="hero-card w-1/12 aspect-square bg-muted">1</div>
          <div className="hero-card w-1/10 aspect-square bg-muted">2</div>
          <div className="hero-card w-1/8 aspect-square bg-muted">3</div>
          <div className="hero-card w-1/12 aspect-square bg-muted">4</div>
          <div className="hero-card w-1/9 aspect-square bg-muted">5</div>
          <div className="hero-card w-1/8 aspect-square bg-muted">6</div>
          <div className="hero-card w-1/10 aspect-square bg-muted">7</div>
          <div className="hero-card w-1/12 aspect-square bg-muted">8</div>
        </div>
      </section>
    </div>
  );
}
