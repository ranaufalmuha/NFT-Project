import NFTLoop from "@/shared/components/NFTLoop";

export default function NFTLoopSection() {
  const imageLogos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8hI1f_dJoQ1IADhP7edaMnlAWyaBMHpQHQ&s",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://cdn.antaranews.com/cache/1200x800/2022/03/19/WhatsApp-Image-2022-03-19-at-09.29.12.jpeg",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8hI1f_dJoQ1IADhP7edaMnlAWyaBMHpQHQ&s",
      alt: "Company 1",
      href: "https://company1.com",
    },
  ];

  return (
    <div className="flex flex-col">
      <NFTLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={200}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#171717"
        ariaLabel="Technology partners"
      />
      <NFTLoop
        logos={imageLogos}
        speed={120}
        direction="right"
        logoHeight={200}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#171717"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
