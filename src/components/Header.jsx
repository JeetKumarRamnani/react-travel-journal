import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="website-logo" className="logo" />
    </div>
  );
}

export default Header;
