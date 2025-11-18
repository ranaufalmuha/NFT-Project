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
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-center-safe">
          <h2 className="text-5xl">{`Let's dive in and learn the basics`}</h2>
        </div>
        <div className="flex flex-col w-full gap-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-2xl border p-4 capitalize flex items-center justify-between hover:bg-foreground hover:text-background duration-300"
            >
              <span>{item.title}</span>
              <div className="w-3">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
