// import React from "react";

import { FaPiggyBank, FaUser } from "react-icons/fa6";
import { MdMoney } from "react-icons/md";

const widgets = [
  { label: "Users", count: 0, id: "user" },
  { label: "Transactions", count: 0, id: "trx" },
  // { label: "Users", count: 0 },
];

const Content = () => {
  const getIcon = (id) => {
    return id === "user" ? <FaUser /> : <FaPiggyBank />;
  };
  return (
    <div className="h-full">
      <div className="flex items-center gap-4">
        {widgets.map((wid) => {
          return (
            <div
              className="flex flex-col gap-2 bg-white w-50 p-4 rounded-md shadow-md"
              key={wid.id}
            >
              <h3 className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                <span
                  className={`${wid.id === "user" ? "bg-amber-200 " : "bg-green-200"} rounded-full p-1.5`}
                >
                  {" "}
                  {getIcon(wid.id)}
                </span>
                {wid.label}
              </h3>
              <span className="text-3xl font-extrabold">{wid.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
