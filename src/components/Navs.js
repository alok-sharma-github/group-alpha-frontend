import React from "react";
import { Link } from "react-router-dom";
import "./Navs.css";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Add Book",
    to: "/add-book",
  },
];

const Navs = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
