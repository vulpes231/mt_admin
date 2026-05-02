import React from "react";
import { style } from "../../constant/constant";
const users = [];

const UserTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mt-5">
        <thead>
          <tr className="capitalize bg-black text-white">
            <th className={style.th}>fullname</th>
            <th className={style.th}>username</th>
            <th className={style.th}>email</th>
            <th className={style.th}>status</th>
            <th className={style.th}>actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className={style.td}>{user.fullname}</td>
                <td className={style.td}>{user.username || user.user}</td>
                <td className={style.td}>{user.email}</td>
                <td className={style.td}>{user.status}</td>
                <td className={style.td}>
                  <select name="">
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                    <option value="view">View</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6">
                No record found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
