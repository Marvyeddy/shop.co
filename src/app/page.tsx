import React from "react";
import Navbar from "../components/custom/Navbar";
import Hero from "../components/custom/Hero";

const Home = () => {
  return (
    <section className="w-full">
      <div className="lg:py-6 py-5 2xl:px-[100px] lg:px-[70px] px-4">
        <Navbar />
      </div>

      <Hero />
    </section>
  );
};

export default Home;
