import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-full p-6">
      <h3 className="font-bold text-2xl">Welcome Admin</h3>
      <div className="flex flex-col gap-4 mt-5 capitalize">
        <Link to={"/dashboard"}>dashboard</Link>
        <Link to={"/users"}>users</Link>
        <Link to={"/transactions"}>transactions</Link>
      </div>
    </div>
  );
};

export default Sidebar;
