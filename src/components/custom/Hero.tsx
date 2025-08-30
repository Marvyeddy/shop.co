import React from "react";
import Typography from "../ui/Typography";
import Image from "next/image";
import HeroImage from "@/public/images/hero-img.png";
import Button from "../ui/Button";
import { cn } from "@/src/lib/utils";

const Hero_count = [
  {
    count: "200+",
    text: "International Brands",
  },
  {
    count: "2,000+",
    text: "High-Quality Products",
  },
  {
    count: "30,000+",
    text: "Happy Customers",
  },
];

const Hero = () => {
  return (
    <div className="bg-hero lg:pl-[100px] min-md:pl-[30px]  2xl:pr-[100px]  pr-[10px]  lg:flex items-center justify-between gap-12 max-md:px-4">
      <div className="flex-1 md:pt-[103px] pt-[40px]">
        <Typography.H1 className="mb-8">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Typography.H1>
        <Typography.P>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </Typography.P>

        <Button variant="primary" className="mt-8 md:w-[210px] w-full">
          Shop Now
        </Button>

        <div className="flex gap-4 flex-wrap my-[38px] mt-[48px] items-center text-center">
          {Hero_count.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex-1 px-2",
                index === 1 && "lg:border-x border-border-gray",
                index === 2 && "max-md:text-center max-md:mt-4"
              )}
            >
              <Typography.H3>{item.count}</Typography.H3>
              <Typography.P color="light-gray" className="max-md:text-sm">
                {item.text}
              </Typography.P>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 md:mt-[103px]">
        <Image
          src={HeroImage}
          alt="hero_image"
          priority
          className="w-[390px] md:h-[488px] h-[448px] max-lg:mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
