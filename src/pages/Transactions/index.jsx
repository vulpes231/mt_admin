import React from "react";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  return (
    <div className="w-full ">
      <div className="mb-5">
        <h3 className="capitalize font-semibold text-lg">
          manage your transactions
        </h3>
        <small className="capitalize text-slate-400">
          edit, manage and delete transactions
        </small>
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
