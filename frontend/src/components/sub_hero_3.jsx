import React from "react";
import { IoAddOutline } from "react-icons/io5";
import User from "./user";

const Parameters = {
  title: {
    name: "Connect Easily",
    action: "See all",
  },
  users: [
    {
      image: "",
      name: "Savannah Nguyen",
      bio: "Unlock the power of real-time",
      action: {
        icon: <IoAddOutline />,
        href: "",
      },
    },
    {
      image: "",
      name: "Brooklyn Simons",
      bio: "Unlock the power of real-time",
      action: {
        icon: <IoAddOutline />,
        href: "",
      },
    },
  ],
};

const Sub_hero_3 = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-50 rounded-[2rem] p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {Parameters?.title?.name}
        </h3>
        <a href="#" className="text-gray-500 font-semibold text-sm">
          {Parameters?.title?.action}
        </a>
      </div>

      <div className="space-y-2">
        {Parameters?.users?.map((user, index) => (
          <User user={user} key={`user-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Sub_hero_3;
