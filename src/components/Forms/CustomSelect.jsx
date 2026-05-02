import React from "react";

const CustomSelect = ({ initialText, children, name, value, handleChange }) => {
  return (
    <select
      name={name}
      onChange={handleChange}
      value={value}
      className="bg-transparent border border-slate-300 h-10 px-2"
    >
      <option value="">{initialText}</option>
      {children}
    </select>
  );
};

export default CustomSelect;
