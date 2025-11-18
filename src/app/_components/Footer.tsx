import HorizontalLogo from "@/shared/components/ui/HorizontalLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="py-8 px-4">
        <div className="flex items-center justify-center gap-1">
          <span>Copyright &copy;{year} </span>
          <HorizontalLogo className="text-base" />
          <span className="">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
