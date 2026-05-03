import React from "react";

const CustomInput = ({ type, value, handleChange, name, placeHolder }) => {
  return (
    <input
      type={type}
      onChange={handleChange}
      value={value}
      name={name}
      autoComplete="off"
      className="border border-slate-300 h-9.5 px-2"
      placeholder={placeHolder}
    />
  );
};

export default CustomInput;
