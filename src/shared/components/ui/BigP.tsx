import React from "react";

export default function BigP({ text }: { text: string }) {
  return (
    <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-normal duration-300">
      {text}
    </p>
  );
}
