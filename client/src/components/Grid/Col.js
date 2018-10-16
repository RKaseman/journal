import React from "react";
import "./Col.css";

export const Col = ({ size, children }) => (
  <div id ="LCol" className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
