import Image from "next/image";
import React from "react";
import Tshirt from "@/public/images/t-shirt.png";
import Typography from "./Typography";
import StarRating from "./StarRating";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="w-fit">
      <figure className="2xl:w-[295px] 2xl:h-[298px] max-2xl:w-[250px] max-2xl:h-[252px] max-md:w-[198px] max-md:h-[200px] overflow-hidden rounded-[20px]">
        <Image
          src={Tshirt}
          alt="shirt"
          priority
          objectFit="fit"
          className="hover:scale-105 transition-transform ease-in-out"
        />
      </figure>

      <div className="mt-4 flex flex-col gap-2">
        <Typography.H5 size="base" className="max-md:text-sm">
          T-shirt with tape details
        </Typography.H5>
        <div className="flex items-center space-x-1">
          <StarRating value={1} />
          <Typography.P size="sm" className="leading-[1em]">
            <span className="text-black">3.5/</span>5
          </Typography.P>
        </div>

        <div className="flex items-center gap-[10px]">
          <Typography.H5>$120</Typography.H5>
          <Typography.H5 className="text-slate-500/40 line-through">
            $120
          </Typography.H5>
          <Button
            variant="discount"
            className="md:w-[58px] md:h-[28px] w-[42px] h-[20px] text-xs"
          >
            -20%
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
