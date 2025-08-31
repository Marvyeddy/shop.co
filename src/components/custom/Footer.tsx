import React from "react";
import Cta from "./Cta";

const Footer = () => {
  return (
    <div className="relative">
      <Cta />
      <div className="py-[140px] px-[101px] bg-hero w-full absolute top-20 -z-30">
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
