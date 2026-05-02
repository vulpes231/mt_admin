import React from "react";
import useTitle from "../../hooks/useTitle";
import TransactionForm from "./TransactionForm";

const CreateTransaction = () => {
  useTitle("Meta - Create Transaction");
  return (
    <div>
      <TransactionForm />
    </div>
  );
};

export default CreateTransaction;
