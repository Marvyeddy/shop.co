import React from "react";
import Navbar from "../components/custom/Navbar";
import Hero from "../components/custom/Hero";
import LogoTicker from "../components/custom/LogoTicker";

const Home = () => {
  return (
    <section className="w-full">
      <div className="lg:py-6 py-5 2xl:px-[100px] lg:px-[70px] px-4">
        <Navbar />
      </div>

      <Hero />
      <div className="bg-primary py-[44px] ">
        <LogoTicker />
      </div>
    </section>
  );
};

export default Home;
