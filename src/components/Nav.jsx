import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between font-worksans mt-12.5">
        <h2 className="text-navyblue font-bold text-[28px] ">Book Vibe</h2>
        <ul className="flex items-center justify-between gap-5">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/books">Listed Books</NavLink></li>
          <li><NavLink to="">Pages to Reload</NavLink></li>
        </ul>
        <div className="flex items-center justify-between gap-5">
          <button className="text-white font-semibold text-lg bg-lightgreen rounded-lg px-7.5 py-4.5">Sign In</button>
          <button className="text-white font-semibold text-lg bg-lightblue rounded-lg px-7.5 py-4.5">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
