import React from "react";
import Typography from "../ui/Typography";
import Image from "next/image";
import HeroImage from "@/public/images/hero-img.png";

const Hero = () => {
  return (
    <div className="h-[663px] bg-hero pl-[100px] flex items-center justify-between gap-12">
      <div className="flex-1">
        <Typography.H1 className="mb-8">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Typography.H1>
        <Typography.P>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </Typography.P>
      </div>

      <div className="flex-1">
        <Image src={HeroImage} width={390} height={663} alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
