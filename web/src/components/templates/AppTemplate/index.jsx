import React from "react";
import NavBar from "../../NavBar";
import "./styles.css";

const AppTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      
    </div>
  );
};

export default AppTemplate;
