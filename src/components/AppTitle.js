import React from "react";
import "./AppTitle.css";

const AppTitle = (props) => {
  const {
    title = "Library Management System",
    subtitle = "Filter book by name.",
  } = props;
  return (
    <div className="app-title-container">
      <h1 className="app-title">{title}</h1>
      <p className="app-subtitle">{subtitle}</p>
    </div>
  );
};

export default AppTitle;
 

 