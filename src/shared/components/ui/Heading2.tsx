import React from "react";

export default function Heading2({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={`lg:text-xl ${className} text-title uppercase duration-300`}>
      {text}
    </h2>
  );
}
