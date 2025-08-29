import React from "react";
import versace from "@/public/images/versace.png";
import clavink from "@/public/images/calvink.png";
import gucci from "@/public/images/gucci.png";
import prada from "@/public/images/prada.png";
import zara from "@/public/images/zara.png";
import Image from "next/image";

const logo = [versace, clavink, gucci, prada, zara];

const LogoTicker = () => {
  return (
    <div className="flex items-center gap-[106px] w-fit mx-auto overflow-hidden">
      {logo.map((img, index) => (
        <Image
          src={img}
          key={index}
          alt="brands"
          className="h-[32px] w-fit"
          priority
        />
      ))}
    </div>
  );
};

export default LogoTicker;
