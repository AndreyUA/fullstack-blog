import React from "react";

import Navbar from "../Navbar/Navbar";
import Canvas from "../Canvas/Canvas";
import Alert from "../Alert/Alert";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      {children}
      <div className="Layout_canvas">
        <Canvas />
        <Alert />
      </div>
    </>
  );
};

export default Layout;
