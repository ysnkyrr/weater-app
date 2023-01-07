import React from "react";
import logo from "./logo/uo.png";

function Nav() {
  return (
    <div className="nav-bar">
      <a target="_blank" href="https://www.yasinakyar.com/">
        <img className="logo-img" src={logo} alt="" />
      </a>
    </div>
  );
}

export default Nav;
