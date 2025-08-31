import React from "react";
import StarRating from "./StarRating";
import Typography from "./Typography";
import Verified from "@/public/icons/verified.svg";

const CarouselCard = () => {
  return (
    <div className="p-3 border rounded-[20px] w-fit border-border-gray">
      <div className="space-y-1">
        <StarRating value={5} />
        <div className="flex items-center gap-2">
          <Typography.H5>Alex K.</Typography.H5>
          <Verified />
        </div>
        <Typography.P className="md:w-[336px] w-[310px]">
          "Finding clothes that align with my personal style used to be a
          challenge until I discovered Shop.co. The range of options they offer
          is truly remarkable, catering to a variety of tastes and occasions.”
        </Typography.P>
      </div>
    </div>
  );
};

export default CarouselCard;
