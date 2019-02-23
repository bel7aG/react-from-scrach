import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ navItems }) => {
  const items = navItems.map(({ name, url }) => (
    <li className="list-items" key={url}>
      <NavLink to={url}>{name}</NavLink>
    </li>
  ));
  return <ul className="list-items">{items}</ul>;
};

export default NavItems;
