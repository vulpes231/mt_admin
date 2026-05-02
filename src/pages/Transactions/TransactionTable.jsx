import React from "react";
import { style } from "../../constant/constant";
const transactions = [];

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mt-5">
        <thead>
          <tr className="capitalize bg-black text-white">
            <th className={style.th}>ID</th>
            <th className={style.th}>type</th>
            <th className={style.th}>amount</th>
            <th className={style.th}>status</th>
            <th className={style.th}>actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.length > 0 ? (
            transactions.map((trx) => (
              <tr key={trx._id}>
                <td className={style.td}>{trx._id}</td>
                <td className={style.td}>{trx.type || trx.trx}</td>
                <td className={style.td}>{trx.amount}</td>
                <td className={style.td}>{trx.status}</td>
                <td className={style.td}>
                  <select name="">
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
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

export default TransactionTable;
