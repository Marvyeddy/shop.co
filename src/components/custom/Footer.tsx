import React from "react";
import Cta from "./Cta";
import Logo from "../ui/Logo";
import Typography from "../ui/Typography";
import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Github from "@/public/icons/github.svg";
import Twitter from "@/public/icons/twitter.svg";
import Link from "next/link";
import visa from "@/public/images/visa.png";
import master from "@/public/images/master.png";
import apple from "@/public/images/apple-pay.png";
import google from "@/public/images/google-pay.png";
import paypal from "@/public/images/paypal.png";
import Image from "next/image";

const payment = [visa, master, apple, google, paypal];

const Footer = () => {
  return (
    <div className="relative">
      <Cta />
      {/* Footer */}
      <div className="py-[140px] max-lg:py-[280px] 2xl:px-[101px] lg:px-[40px] bg-hero w-full absolute top-20 -z-30">
        <div className="2xl:max-w-[1240px] mx-auto flex max-lg:flex-col items-center justify-between gap-[113px]">
          {/* first */}
          <div className="flex flex-col gap-[25px] max-md:px-6">
            <Logo />

            <Typography.P className="lg:max-w-[248px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </Typography.P>

            <div className="flex items-center gap-3">
              <button className="size-[28px] rounded-full border border-border-gray items-center flex justify-center bg-white cursor-pointer hover:scale-105 duration-300">
                <Twitter />
              </button>
              <button className="size-[28px] rounded-full border border-border-gray items-center flex justify-center bg-black cursor-pointer hover:scale-105 duration-300">
                <Facebook />
              </button>
              <button className="size-[28px] rounded-full border border-border-gray items-center flex justify-center bg-white cursor-pointer hover:scale-105 duration-300">
                <Instagram />
              </button>
              <button className="size-[28px] rounded-full border border-border-gray items-center flex justify-center bg-white cursor-pointer hover:scale-105 duration-300">
                <Github />
              </button>
            </div>
          </div>

          {/* second */}
          <div className="grid grid-cols-2 gap-8 md:flex md:gap-24 items-center">
            <div>
              <Typography.P className="uppercase mb-[25px]">
                Company
              </Typography.P>
              <div className="flex flex-col gap-4">
                <Link className="text-sm" href={"/about"}>
                  About
                </Link>
                <Link className="text-sm" href={"/features"}>
                  Features
                </Link>
                <Link className="text-sm" href={"/works"}>
                  Works
                </Link>
                <Link className="text-sm" href={"/career"}>
                  Career
                </Link>
              </div>
            </div>

            <div>
              <Typography.P className="uppercase mb-[25px]">Help</Typography.P>
              <div className="flex flex-col gap-4">
                <Link className="text-sm" href={"/support"}>
                  Customer Support
                </Link>
                <Link className="text-sm" href={"/delivery"}>
                  Delivery Details
                </Link>
                <Link className="text-sm" href={"/terms"}>
                  Terms & Conditions
                </Link>
                <Link className="text-sm" href={"/privacy"}>
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <Typography.P className="uppercase mb-[25px]">Faq</Typography.P>
              <div className="flex flex-col gap-4">
                <Link className="text-sm" href={"/account"}>
                  Account
                </Link>
                <Link className="text-sm" href={"/manage-deliveries"}>
                  Manage Deliveries
                </Link>
                <Link className="text-sm" href={"/orders"}>
                  Orders
                </Link>
                <Link className="text-sm" href={"/payments"}>
                  Payments
                </Link>
              </div>
            </div>

            <div>
              <Typography.P className="uppercase mb-[25px]">
                Resources
              </Typography.P>
              <div className="flex flex-col gap-4">
                <Link className="text-sm" href={"/free-ebooks"}>
                  Free eBooks
                </Link>
                <Link className="text-sm" href={"/development-tutorial"}>
                  Development Tutorial
                </Link>
                <Link className="text-sm" href={"/how-to-blog"}>
                  How to - Blog
                </Link>
                <Link className="text-sm" href={"/youtube-playlist"}>
                  Youtube Playlist
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-full border-border-gray mt-[50px] lg:max-w-[1240px] md:max-w-[640px]  max-md:max-w-[358px] mx-auto " />

        <div className="flex max-md:flex-col gap-3 items-center justify-between mt-5 px-7">
          <Typography.P>Shop.co © 2000-2023, All Rights Reserved</Typography.P>

          <div className="flex items-center">
            {payment.map((item, index) => (
              <Image
                src={item}
                alt="items"
                key={index}
                width={47}
                height={20}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
