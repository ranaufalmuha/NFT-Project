import React from "react";

export default function SwitchCharacterSection() {
  return (
    <section className="mx-auto max-w-7xl flex flex-col w-full px-4 gap-4">
      <div className="w-full bg-accent-1 aspect-video"></div>

      {/* list character  */}
      <div className="flex gap-4">
        <div className="bg-accent-1 w-full aspect-2/1 hover:"></div>
        <div className="bg-accent-1 w-full aspect-2/1"></div>
        <div className="bg-accent-1 w-full aspect-2/1"></div>
      </div>
    </section>
  );
}
