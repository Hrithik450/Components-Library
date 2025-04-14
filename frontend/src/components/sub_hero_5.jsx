import React from "react";

const Parameters = {
  image:
    "https://res.cloudinary.com/duozomapm/image/upload/v1744573780/Screenshot_2025-04-14_013317_e2zo99.png",
  alt: "Phone Mockup",
};

const Sub_hero_5 = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-50 rounded-[2rem] overflow-hidden">
      <div className="bg-gray-100 rounded-lg aspect-w-3 aspect-h-4 h-full">
        <img
          src={Parameters?.image}
          alt={Parameters?.alt}
          className="object-fill w-full h-full"
        />
      </div>
    </div>
  );
};

export default Sub_hero_5;
