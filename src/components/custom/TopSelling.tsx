import React from "react";
import Typography from "../ui/Typography";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

const TopSelling = () => {
  return (
    <div>
      <div className="mx-auto w-fit mb-[55px]">
        <Typography.H2 className="font-integral">Top Selling</Typography.H2>
      </div>

      <div className="flex items-center gap-7 mx-auto lg:flex-wrap max-lg:overflow-scroll mb-9">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Button
        variant="transparent"
        className="md:w-[218px] w-[90%] h-[52px] mx-auto mb-[150px]"
      >
        View all
      </Button>
    </div>
  );
};

export default TopSelling;
