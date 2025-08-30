import React from "react";
import Typography from "../ui/Typography";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

const NewArrival = () => {
  return (
    <div className="border-b border-border-gray mb-16">
      <div className="mx-auto w-fit mb-[55px]">
        <Typography.H2 className="lg:font-integral">NEW ARRIVALS</Typography.H2>
      </div>

      <div className="flex items-center gap-7 mx-auto lg:flex-wrap max-lg:overflow-scroll mb-9">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Button
        variant="transparent"
        className="md:w-[218px] w-[90%] h-[52px] mx-auto mb-10"
      >
        View all
      </Button>
    </div>
  );
};

export default NewArrival;
