import BigP from "@/shared/components/ui/BigP";
import Container from "@/shared/components/ui/Container";
import Heading2 from "@/shared/components/ui/Heading2";

export default function AboutSection() {
  return (
    <div id="about">
      <Container>
        <div className="flex flex-col gap-6 py-28">
          <Heading2 text="About the Project" />
          <BigP
            text="This project reimagines anime NFTs for a cyberpunk future: three core
          characters, medium-chibi proportions (around 5-head tall), and a
          generative system that can scale from tens of thousands to potentially
          100,000+ unique pieces."
          />
          <div className="grid grid-cols-5 gap-4 mt-6">
            <div className="col-span-3 bg-muted w-full h-full aspect-square group">
              <img
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/one-piece-elbaf-s-ancient-mural.jpeg?q=49&fit=crop&w=825&dpr=2"
                draggable={false}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 bg-muted w-full h-full group">
              <img
                src="https://i.ytimg.com/vi/0qksElMl7R8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJEzuoGlcNGTSAyxceupPIRK0eJA"
                draggable={false}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="col-span-2 bg-muted w-full h-80">
              <img
                src="https://www.1101.com/store/techo/2023/detail_images/wb23_opmthnworld/extra_01.jpg"
                draggable={false}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 bg-muted w-full h-80">
              <img
                src="https://www.nftculture.com/wp-content/uploads/2024/05/azuki-anime.jpeg"
                draggable={false}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
