import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AccountTable from "./AccountTable";

const Accounts = () => {
  useTitle("Meta - Accounts");
  return (
    <div className="w-full">
      <div className="mb-5 capitalize flex items-center justify-between">
        <span>
          <h3 className="font-semibold text-lg">manage user accounts</h3>
          <small className="text-slate-400">
            edit, manage and delete accounts
          </small>
        </span>
        <Link
          to={"/create-account"}
          className="bg-black text-white rounded-md font-medium px-6 py-2 capitalize text-sm"
        >
          create account
        </Link>
      </div>
      <div className="bg-white rounded-md shadow">
        <AccountTable />
      </div>
    </div>
  );
};

export default Accounts;
