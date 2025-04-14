import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";

const Home = () => {
  return (
    <section className="bg-[#D9DAE3] px-5 lg:px-10 xl:px-40 py-10">
      <div className="max-w-[120rem] w-full mx-auto h-full">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default Home;
