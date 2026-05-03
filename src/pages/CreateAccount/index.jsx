import React from "react";

import AccountForm from "./AccountForm";
import useTitle from "../../hooks/useTitle";

const CreateAccount = () => {
  useTitle("Meta - Create Account");
  return (
    <div>
      <AccountForm />
    </div>
  );
};

export default CreateAccount;
