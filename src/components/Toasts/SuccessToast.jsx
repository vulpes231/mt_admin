// import React from "react";
import { MdClose, MdError } from "react-icons/md";

const SuccessToast = ({ successMsg, handleClose }) => {
  return (
    <div className="text-green-500 fixed top-25 right-2 bg-white rounded-md">
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <MdError /> Success
        </span>
        <MdClose onClick={handleClose} />
      </span>
      <hr />
      <span>{successMsg}</span>
    </div>
  );
};

export default SuccessToast;
