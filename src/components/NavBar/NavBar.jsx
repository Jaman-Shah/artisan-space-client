// file structure:
/**
 * 1. Navbar using daisyui
 * 2.
 */

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("successfully sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // reuseable classes and nav links for the navbar items
  const activeClass = ({ isActive }) =>
    `py-3 px-4 hover:text-red-400 hover:rounded-xl  transition ease-in-out delay-150  ${
      isActive ? "text-red-400" : ""
    }`;

  const links = (view) => {
    return (
      <ul
        tabIndex={0}
        // conditionally changing classes for vertical and horizontal view
        className={`menu font-extrabold text-sm text-white ${
          view === "horizontal"
            ? "menu-horizontal px-1"
            : view === "vertical"
            ? "menu-sm dropdown-content rounded-2xl mt-3 z-[1] p-2 shadow bg-[#5C6BC0] border w-52"
            : ""
        }`}
      >
        <NavLink to="/" className={activeClass}>
          HOME
        </NavLink>
        <NavLink to="/artandcraft" className={activeClass}>
          ART ADN CRAFT
        </NavLink>
        <NavLink to="/addcraft" className={activeClass}>
          ADD CRAFT
        </NavLink>
        <NavLink to="/myartandcraft" className={activeClass}>
          MY ART ADN CRAFT
        </NavLink>
        {user ? (
          <div className="flex flex-col md:flex-col lg:flex-row"></div>
        ) : (
          ""
        )}
      </ul>
    );
  };
  return (
    <nav className=" navbar  bg-[#5C6BC0]  z-50 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {links("vertical")}
        </div>
        <Link
          to="/"
          className=" text-white font-extrabold btn btn-ghost text-xl md:text-3xl"
        >
          Artisan Space
        </Link>
      </div>
      <div className="navbar-center justify-end hidden lg:flex">
        {links("horizontal")}
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="w-[40px]">
              <div
                className="tooltip hover:tooltip-open tooltip-left"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  className="rounded-full border-4 border-white"
                  alt=""
                />
              </div>
            </div>
            <button
              onClick={handleSignOutUser}
              className=" btn rounded-full bg-[#FF1744] transition ease-in-out delay-100 duration-150 hover:bg-red-700 border-none hover:text-white"
            >
              SignOut
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/login"
              className=" flex items-center font-sm font-light btn:sm text-white md:btn-secondary  text-xs  p-2  md:text-sm rounded-full bg-none border-2 border-[#FF8F00]  transition duration-500 hover:bg-[#FF8F00] ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" flex items-center font-light btn:sm text-white md:btn-secondary  text-xs p-2  md:text-sm rounded-full bg-none border-2 border-[#FF8F00]  transition duration-500 hover:bg-[#FF8F00] ease-in-out"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
