import React from "react";

import Navbar from "../Navbar/Navbar";
import Canvas from "../Canvas/Canvas";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      {children}
      <div className="Layout_canvas">
        <Canvas />
      </div>
    </>
  );
};

export default Layout;
