import React from "react";
import Sub_hero_1 from "./sub_hero_1";
import Sub_hero_2 from "./sub_hero_2";
import Sub_hero_3 from "./sub_hero_3";
import Sub_hero_5 from "./sub_hero_5";
import Sub_hero_4 from "./sub_hero_4";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-2 py-2">
      <Sub_hero_1 />
      <Sub_hero_2 />
      <Sub_hero_3 />
      <Sub_hero_4 />
      <Sub_hero_5 />
    </div>
  );
};

export default Hero;
