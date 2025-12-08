/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type MosaicQuadGridProps = {
  images: any[];
  className?: string;
};

const sizeVariants = [
  "row-span-24", // tinggi
  "row-span-16", // medium
  "row-span-20", // agak tinggi
  "row-span-12", // pendek
];

export const MosaicQuadGrid: React.FC<MosaicQuadGridProps> = ({
  images,
  className = "",
}) => {
  return (
    <div
      className={`
        grid
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        auto-rows-[8px]          
        grid-flow-dense          
        gap-4
        ${className}
      `}
    >
      {images.slice(0, 16).map((item, i) => {
        const sizeClass = sizeVariants[i % sizeVariants.length];

        return (
          <div
            key={i}
            className={`
              relative
              w-full
              overflow-hidden
              bg-muted
              ${sizeClass}
            `}
          >
            <img
              src={item.image}
              alt={`Mosaic item ${i + 1}`}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
};
