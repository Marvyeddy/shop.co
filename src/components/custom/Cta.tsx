import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import { Mail } from "lucide-react";

const Cta = () => {
  return (
    <div className="flex justify-between 2xl:max-w-5xl lg:max-w-4xl bg-primary py-9 px-16 rounded-[20px] mx-auto">
      <div className="w-[553px]">
        <Typography.H3 className="text-white font-integral">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </Typography.H3>
      </div>

      <div className="flex flex-col gap-4">
        <div className="py-3 px-4 lg:flex hidden items-center gap-3 rounded-[62px] bg-white">
          <Mail className="text-slate-500/50" />
          <input
            placeholder="Enter your email address"
            className="focus:outline-none max-w-[349px] placeholder:text-sm"
          />
        </div>

        <Button variant="white">Subscribe to Newsletter</Button>
      </div>
    </div>
  );
};

export default Cta;
