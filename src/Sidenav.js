import React from "react";
import { NavLink } from "react-router-dom";
import CommonNav from "./component/CommonNav";

const SideNave = () => {
  return (
    <>
      <section className="side_nav">
        <h2>User Fas@</h2>
        <CommonNav />
        <NavLink to="/map">Map📍</NavLink>
        <NavLink to="/chart">Chart💬</NavLink>
        <NavLink to="/help">Help蓮</NavLink>
      </section>
    </>
  );
};

export default SideNave;
