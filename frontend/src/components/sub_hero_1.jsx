import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { UserIcon } from "./usericon";

const Parameters = {
  title: {
    name1: "Control your",
    name2: "finance",
    name3: "future easily",
  },
  description:
    "Streamline your business’s financial management with our intuitive,scalable SaaS platform. Designed for U.S. enterprises.",
  action: {
    name: "Open Account",
    icon: <FiArrowUpRight size={20} />,
  },
  footer: {
    first: { svg: "" },
    middle: {
      name: "15 Million+",
      description:
        "Unlock the power of real-time analytics with our cutting-edge financial",
    },
    last: {
      users: [
        {
          userID: "",
          image: "",
          action: {
            icon: <IoAddOutline />,
            href: "",
          },
        },
        {
          userID: "",
          image: "",
          action: {
            icon: <IoAddOutline />,
            href: "",
          },
        },
        {
          userID: "",
          image: "",
          action: {
            icon: <IoAddOutline />,
            href: "",
          },
        },
      ],
    },
  },
};

const Sub_hero_1 = () => {
  return (
    <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
      {/* body */}
      <div className="space-y-6 md:space-y-8">
        {/* title */}
        <div className="text-4xl md:text-6xl font-semibold text-black space-y-1">
          <h1>{Parameters?.title?.name1}</h1>
          <h1>{Parameters?.title?.name2}</h1>
          <h1>{Parameters?.title?.name3}</h1>
        </div>

        {/* description */}
        <p className="text-sm md:text-md text-gray-700 font-semibold leading-relaxed">
          {Parameters?.description}
        </p>

        {/* action */}
        <div className="flex items-center pt-2 md:pt-4">
          <button className="bg-[#DEF25C] text-black font-medium py-2 px-4 rounded-full cursor-pointer text-sm md:text-base">
            {Parameters?.action?.name}
          </button>
          <div className="rounded-full bg-black text-white flex items-center justify-center w-8 h-8 md:w-10 md:h-10 cursor-pointer ml-3 md:ml-4">
            {Parameters?.action?.icon}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex items-center justify-center mt-6 md:mt-8">
        {/* first */}
        <div className="w-24 md:w-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="25"
              y1="20"
              x2="85"
              y2="20"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <polygon points="90,20 75,15 75,25" fill="#3B82F6" />
            <circle
              cx="105"
              cy="20"
              r="15"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="105"
              cy="20"
              r="10"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="105"
              cy="20"
              r="5"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="#3B82F6"
            />
          </svg>
        </div>

        {/* middle */}
        <div className="text-left mx-3 md:mx-4">
          <div className="text-xl md:text-3xl font-bold text-black">
            {Parameters?.footer?.middle?.name}
          </div>
          <p className="text-gray-500 font-semibold text-xs md:text-sm">
            {Parameters?.footer?.middle?.description}
          </p>
        </div>

        {/* last */}
        <div className="flex -space-x-2 md:-space-x-3 ml-3 md:ml-4">
          {Parameters?.footer?.last?.users?.map((user, index) => (
            <UserIcon
              key={`user-${index}`}
              user={user}
              size="small"
              mdSize="medium"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sub_hero_1;
