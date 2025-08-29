import React from "react";
import Typography from "../ui/Typography";
import Image from "next/image";
import HeroImage from "@/public/images/hero-img.png";
import Button from "../ui/Button";

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
    <div className="bg-hero lg:pl-[100px] min-md:pl-[30px]  2xl:pr-[100px] lg:pr-[0px] pr-[10px]  flex items-center justify-between gap-12">
      <div className="flex-1 mt-[103px]">
        <Typography.H1 className="mb-8">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Typography.H1>
        <Typography.P>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </Typography.P>

        <Button variant="primary" className="mt-8">
          Shop Now
        </Button>

        <div className="flex items-center gap-8 my-[38px] mt-[48px]">
          {Hero_count.map((item, index) => (
            <div key={index}>
              <Typography.H3>{item.count}</Typography.H3>
              <Typography.P color="light-gray">{item.text}</Typography.P>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 mt-[103px]">
        <Image
          src={HeroImage}
          alt="hero_image"
          priority
          className="w-[390px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
