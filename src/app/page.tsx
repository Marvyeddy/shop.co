import React from "react";
import Navbar from "../components/custom/Navbar";
import Hero from "../components/custom/Hero";
import LogoTicker from "../components/custom/LogoTicker";
import NewArrival from "../components/custom/NewArrival";
import TopSelling from "../components/custom/TopSelling";
import BrowseDress from "../components/custom/BrowseDress";

const Home = () => {
  return (
    <section className="w-full">
      <div className="lg:py-6 py-5 2xl:px-[100px] lg:px-[70px] px-4">
        <Navbar />
      </div>

      <Hero />
      <div className="bg-primary py-[44px] max-lg:py-[39px] overflow-hidden mb-[72px]">
        <LogoTicker />
      </div>

      <div className="2xl:px-[100px] lg:px-[70px] pl-4">
        <NewArrival />
        <TopSelling />
      </div>

      <div className="md:max-w-[1111px] mx-auto">
        <BrowseDress />
      </div>
    </section>
  );
};

export default Home;
