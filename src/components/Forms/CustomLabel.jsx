import React from "react";

const CustomLabel = ({ labelText }) => {
  return (
    <label htmlFor={labelText} className="text-slate-500 capitalize">
      {labelText}
    </label>
  );
};

export default CustomLabel;
