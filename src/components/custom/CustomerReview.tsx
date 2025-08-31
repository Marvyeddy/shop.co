import React from "react";
import Typography from "../ui/Typography";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselReview from "./CarouselReview";

const CustomerReview = () => {
  return (
    <div className="overflow-hidden mb-[80px]">
      <div className="flex items-center justify-between lg:max-w-6xl mx-auto max-lg:px-4 mb-10 max-md:mb-6">
        <Typography.H2 className="font-integral max-md:leading-[36px]">
          OUR HAPPY CUSTOMERS
        </Typography.H2>

        <div className="flex items-center gap-3">
          <button className="cursor-pointer p-2 rounded-full hover:bg-secondary">
            <ArrowLeft />
          </button>

          <button className="cursor-pointer p-2 rounded-full hover:bg-secondary">
            <ArrowRight />
          </button>
        </div>
      </div>

      <CarouselReview />
    </div>
  );
};

export default CustomerReview;
