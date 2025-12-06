import React from "react";

export default function Heading2({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={`text-xl ${className} text-title uppercase`}>{text}</h2>
  );
}
