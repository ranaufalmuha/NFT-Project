import ActionCallSection from "./_components/ActionCallSection";
import HeroSection from "./_components/HeroSection";
import NFTLoopSection from "./_components/NFTLoopSection";
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
        <ActionCallSection />
        <NFTLoopSection />
        <TeamSection />
        <div className=""></div>
      </main>
    </div>
  );
}
