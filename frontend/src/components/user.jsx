import React from "react";
import { UserIcon } from "./usericon";

// User Action Card
const User = ({ user }) => {
  return (
    <div className="flex items-center justify-between rounded-full bg-gray-100 px-2 py-2">
      <div className="flex items-center gap-3">
        <UserIcon user={user} />

        <div>
          <h4 className="text-sm font-bold text-black">{user?.name}</h4>
          <p className="text-xs text-gray-500">{user?.bio}</p>
        </div>
      </div>

      <a
        href={user?.action?.href}
        className="bg-white text-gray-600 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        {user?.action?.icon}
      </a>
    </div>
  );
};

export default User;
