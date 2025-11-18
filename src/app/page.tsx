import ActionCallSection from "./_components/ActionCallSection";
import HeroSection from "./_components/HeroSection";
import NFTLoopSection from "./_components/NFTLoopSection";
import SwitchCharacterSection from "./_components/SwitchCharacterSection";
import TeamSection from "./_components/TeamSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col gap-24">
        <HeroSection />
        <SwitchCharacterSection />
        <ActionCallSection />
        <NFTLoopSection />
        <TeamSection />
        <div className=""></div>
      </main>
    </div>
  );
}
