import React from "react";
import Typography from "../ui/Typography";
import Casual from "@/public/images/casual.png";
import Formal from "@/public/images/formal.png";
import Party from "@/public/images/party.png";
import Gym from "@/public/images/gym.png";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: Casual,
    alt: "Casual",
    width: 407,
    height: 289,
    className: "rounded-[20px]",
  },
  {
    src: Formal,
    alt: "Formal",
    width: 684,
    height: 289,
    className: "flex-1 rounded-[20px]",
  },
  // This is a placeholder for the break
  { isBreak: true },
  {
    src: Party,
    alt: "Party",
    width: 684,
    height: 289,
    className: "flex-1 rounded-[20px]",
  },
  {
    src: Gym,
    alt: "Gym",
    width: 407,
    height: 289,
    className: "rounded-[20px]",
  },
];

const BrowseDress = () => {
  return (
    <div>
      <Typography.H2 className="font-integral text-center mb-16">
        BROWSE BY dress STYLE
      </Typography.H2>

      <div className="flex gap-5 flex-wrap">
        {images.map((img, idx) =>
          img.isBreak ? (
            // force break to next line
            <div className="basis-full" key={`break-${idx}`} />
          ) : (
            <Link
              href={"/"}
              className="relative hover:scale-105 transition-transform ease-in duration-150"
            >
              <Image
                key={idx}
                src={img.src ?? ""}
                alt={img.alt ?? ""}
                width={img.width}
                height={img.height}
                priority
                className={img.className}
              />
              <Typography.H4 className=" absolute top-[25px] left-[36px]">
                {img.alt ?? ""}
              </Typography.H4>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BrowseDress;
