// Dashboard.jsx
import React from "react";

import Content from "./Content";
import useTitle from "../../hooks/useTitle";

const DashBoard = () => {
  useTitle("Meta - Admin Dashboard");

  return (
    <div>
      <Content />
    </div>
  );
};

export default DashBoard;
