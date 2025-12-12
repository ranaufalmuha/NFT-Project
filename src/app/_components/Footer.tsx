import Container from "@/shared/components/ui/Container";
import HorizontalLogo from "@/shared/components/ui/HorizontalLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-linear-to-b from-card to-card/70 border-white/10 relative flex flex-col ">
      {/* CTA  */}
      <Container>
        <div className="relative h-200 w-full flex items-center overflow-hidden">
          <h2 className="w-5xl text-start z-5 px-4 pointer-events-none">
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-300">
              Let`s make something extraordinary
            </span>
          </h2>
          <div className="flex gap-8 absolute right-0 z-0">
            <LogoLoop direction="down" />
            <LogoLoop direction="up" />
          </div>
        </div>
      </Container>

      <hr className="border-t border-white/10" />

      {/* Nav  */}
      <div className="py-8 px-4 z-5">
        <div className="flex items-center justify-center gap-1 text-white/70">
          <span>Copyright &copy;{year} </span>
          <HorizontalLogo className="text-base" />
          <span className="">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

const LogoItem = () => (
  <div className="flex items-center justify-center w-80 h-80 border group hover:border-0">
    <div className="text-background font-bold text-xl ">
      <img
        src={
          "https://nftcalendar.io/storage/uploads/news/2024/12/rRlGWBa7X9IzXjq0icJOKrfQAXfTKx5KKtnkFVAV.jpg"
        }
        alt=""
        className="group-hover:opacity-100 opacity-0 duration-300"
        width={720}
        height={720}
      />
    </div>
  </div>
);

const LogoLoop = ({ direction = "down" }: { direction: "down" | "up" }) => {
  return (
    <div className="h-full ">
      <div
        style={{
          animation: `${
            direction == "down" ? "scroll-down" : "scroll-up"
          } 30s linear infinite`,
        }}
        className="flex flex-col gap-8 "
      >
        {Array.from({ length: 3 }).map((items, i) => (
          <div key={i} className="flex flex-col gap-8">
            <LogoItem />
            <LogoItem />
            <LogoItem />
            <LogoItem />
            <LogoItem />
            <LogoItem />
            <LogoItem />
          </div>
        ))}
      </div>
    </div>
  );
};
