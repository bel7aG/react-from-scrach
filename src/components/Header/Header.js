import React from "react";
import { NavItems } from "../";

const Header = ({ navItems }) => {
  return (
    <header className="header">
      <div className="list-box">
        <nav className="nav-items">
          <NavItems navItems={navItems} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
