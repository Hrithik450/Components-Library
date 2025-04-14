import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="bg-[#D9DAE3] h-full px-5 lg:px-10 xl:px-40 py-10">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
