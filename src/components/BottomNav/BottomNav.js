import React from "react";
import { Switch, Route } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <>
      <div className="bottom_nav col-12">
        <h1 className="main_heading">Bouncer</h1>
        <nav className="navbar">
          <ul className="nav_links">
              <li className="nav_link">HOME</li>
              <li className="nav_link">STORE</li>
              <li className="nav_link">IPHONE</li>
              <li className="nav_link">IPAD</li>
              <li className="nav_link">MACBOOK</li>
              <li className="nav_link">ACCESORIES</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BottomNav;
