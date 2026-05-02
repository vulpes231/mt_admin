// import React from "react";
import { MdClose, MdError } from "react-icons/md";

const ErrorToast = ({ errorMsg, handleClose }) => {
  return (
    <div className="text-red-500 fixed top-25 right-2 bg-white rounded-md">
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <MdError /> Error
        </span>
        <MdClose onClick={handleClose} />
      </span>
      <hr />
      <span>{errorMsg}</span>
    </div>
  );
};

export default ErrorToast;
