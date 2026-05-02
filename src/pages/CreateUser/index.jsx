import React from "react";
import useTitle from "../../hooks/useTitle";
import UserForm from "./UserForm";

const CreateUser = () => {
  useTitle("Meta - Create User");
  return (
    <div>
      <UserForm />
    </div>
  );
};

export default CreateUser;
