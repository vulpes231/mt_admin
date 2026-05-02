import React from "react";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Users = () => {
  useTitle("Meta - Users");
  return (
    <div className="w-full">
      <div className="mb-5 capitalize flex items-center justify-between">
        <span>
          <h3 className="font-semibold text-lg">manage your users</h3>
          <small className="text-slate-400">
            edit, manage and delete users
          </small>
        </span>
        <Link
          to={"/create-user"}
          className="bg-black text-white rounded-md font-medium px-6 py-2 capitalize text-sm"
        >
          create user
        </Link>
      </div>
      <div className="bg-white rounded-md shadow">
        <div className="flex items-center justify-between p-5">
          <h3>Users</h3>
          <span>
            <p>filter by: </p>
          </span>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
