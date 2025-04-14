import React from "react";

const NavItem = ({ item }) => {
  return (
    <a
      href={item?.href}
      className="inline-flex items-center rounded-full bg-gray-100 pl-1 pr-3 py-1 text-gray-700 hover:text-blue-600 font-medium"
    >
      <div className="rounded-full bg-white p-2">{item?.icon}</div>
      <span className="ml-2">{item?.name}</span>
    </a>
  );
};

export default NavItem;
