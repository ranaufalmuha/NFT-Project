import HeroSection from "./_components/HeroSection";
import NFTShowcaseSection from "./_components/NFTShowcaseSection";
import CharacterSection from "./_components/CharacterSection";
import TeamSection from "./_components/TeamSection";
import AboutSection from "./_components/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col">
        <div id="hero" />
        <HeroSection />
        <CharacterSection />
        <AboutSection />
        <NFTShowcaseSection />
        <TeamSection />
        <div className="mb-28"></div>
      </main>
    </div>
  );
}
