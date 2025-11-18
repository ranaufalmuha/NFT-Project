import HorizontalLogo from "@/shared/components/ui/HorizontalLogo";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ActionCallSection() {
  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "gallery",
      href: "/gallery",
    },
    {
      title: "community",
      href: "/community",
    },
  ];
  return (
    <section className="mx-auto max-w-5xl w-full px-4 py-80 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 w-full">
        <div className="flex justify-center flex-col max-md:items-center gap-4 max-md:text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">{`Let's dive in and learn the basics`}</h2>
          <HorizontalLogo />
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="md:text-2xl border p-4 capitalize flex items-center justify-between hover:bg-foreground hover:text-background duration-300 w-full md:w-4/5"
            >
              <span>{item.title}</span>
              <div className="w-2 md:w-3">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
