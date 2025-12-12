import { MosaicQuadGrid } from "@/shared/components/MosaicQuadGrid";
import ScrollVelocity from "@/shared/components/ScrollVelocity";
import Container from "@/shared/components/ui/Container";
import Button from "@/shared/components/ui/Button";
import nftList from "@/shared/assets/gallery.json";

export default function NFTShowcaseSection() {
  return (
    <section id="gallery" className="flex flex-col py-28 gap-12">
      <h2>
        <ScrollVelocity
          texts={["A Glimpse into the Collection"]}
          velocity={200}
          className="custom-scroll-text"
        />
      </h2>

      <Container>
        <div className="max-h-screen overflow-hidden relative">
          <MosaicQuadGrid images={nftList} />
          <div className="bg-linear-to-t from-background w-full h-1/2 z-5 absolute left-0 bottom-0 flex items-end justify-center pb-12 pointer-events-none">
            <Button href="/" text="Explore More" />
          </div>
        </div>
      </Container>
    </section>
  );
}
