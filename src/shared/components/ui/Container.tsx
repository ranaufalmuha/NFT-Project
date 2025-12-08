import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 xl:px-12 md:px-8 flex flex-col duration-300">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        {children}
      </div>
    </div>
  );
}
