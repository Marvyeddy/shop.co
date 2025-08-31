import React from "react";
import CarouselCard from "../ui/CarouselCard";

const CarouselReview = () => {
  return (
    <div className="relative">
      {/* Left blur - hidden on mobile */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 hidden md:block"
        style={{
          background: "linear-gradient(to right, white 30%, transparent 100%)",
        }}
      />
      {/* Right blur - hidden on mobile */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 hidden md:block"
        style={{
          background: "linear-gradient(to left, white 30%, transparent 100%)",
        }}
      />
      <div
        className="flex items-center gap-5 overflow-x-scroll md:pl-8 pl-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
    </div>
  );
};

export default CarouselReview;
