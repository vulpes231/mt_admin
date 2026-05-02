import React from "react";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <div className="w-full">
      <div className="mb-5 capitalize">
        <h3 className="font-semibold text-lg">manage your users</h3>
        <small className="text-slate-400">edit, manage and delete users</small>
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
