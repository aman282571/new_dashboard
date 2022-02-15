import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(p) {
  return (
    <ul className=" navigation d-flex align-items-center justify-content-center ">
      <li className="pl-0">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Footfall
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/expenses"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Expenses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/avgcost"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          AvgCost
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
