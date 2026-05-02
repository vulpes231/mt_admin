import React from "react";
import TransactionTable from "./TransactionTable";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Transactions = () => {
  useTitle("Meta - Transactions");
  return (
    <div className="w-full ">
      <div className="mb-5 flex items-center justify-between">
        <span>
          <h3 className="capitalize font-semibold text-lg">
            manage your transactions
          </h3>
          <small className="capitalize text-slate-400">
            edit, manage and delete transactions
          </small>
        </span>
        <Link
          to={"/create-transaction"}
          className="bg-black text-white rounded-md font-medium px-6 py-2 capitalize text-sm"
        >
          create transaction
        </Link>
      </div>
      <div className="bg-white shadow rounded-md">
        <div className="flex items-center justify-between p-5">
          <h3>Transactions</h3>
          <span>
            <p>filter by: </p>
          </span>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
