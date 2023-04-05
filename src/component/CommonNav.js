import React from "react";
import { NavLink } from "react-router-dom";

const CommonNav = () => {
  return (
    <>
      <NavLink to="/">Dashbord🏠</NavLink>
      <NavLink to="/weather">Weather☀️</NavLink>
      <NavLink to="/about">About us😀</NavLink>
      <NavLink to="/contract">Contract us📞</NavLink>
    </>
  );
};

export default CommonNav;
