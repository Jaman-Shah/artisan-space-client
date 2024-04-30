// file structure:
/**
 * 1. Navbar using daisyui
 * 2.
 */

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import { ThemeContext } from "../../providers/ThemeProvider";
import { setThemeValue } from "../utils/themeController";
import { WiMoonFull, WiMoonAltWaxingCrescent5 } from "react-icons/wi";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { darkValue, setDarkValue } = useContext(ThemeContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("successfully sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // theme controller function

  const handleTheme = () => {
    setDarkValue(!darkValue);
    setThemeValue(!darkValue);
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
            ? `menu-sm dropdown-content rounded-node  mt-3 z-[1] p-2  ${
                darkValue ? "bg-[#23272F]" : "bg-[#5C6BC0]"
              } border w-52`
            : ""
        }`}
      >
        <NavLink
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Go to Home"
          to="/"
          className={activeClass}
        >
          HOME
        </NavLink>
        <NavLink
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Art And Craft You Added"
          to="/allartandcraft"
          className={activeClass}
        >
          ALL ART AND CRAFT
        </NavLink>
        <NavLink
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Add Your Art and Craft"
          to="/addcraft"
          className={activeClass}
        >
          ADD CRAFT
        </NavLink>
        <NavLink
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Your Added Art and Crafts"
          to="/myartandcraft"
          className={activeClass}
        >
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
    <nav
      className={`navbar ${
        darkValue
          ? "bg-[#23272F] border-b text-orange-400  border-gray-300"
          : "bg-[#5C6BC0] "
      } z-10 sticky top-0`}
    >
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
          className=" text-white font-josefin font-extrabold btn btn-ghost text-lg md:text-4xl"
        >
          <span className="text-orange-500 ">Artisan</span>{" "}
          <span className="text-blue-500">Space</span>
        </Link>
      </div>
      <div className="navbar-center justify-end hidden lg:flex">
        {links("horizontal")}
      </div>
      <div className="navbar-end flex gap-0 md:gap-3 ">
        <div
          className="cursor-pointer z-20 "
          onClick={handleTheme}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Theme"
        >
          {darkValue ? (
            <WiMoonFull className="text-4xl text-orange-400" />
          ) : (
            <WiMoonAltWaxingCrescent5 className="text-4xl text-green " />
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <div className="w-[40px]">
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img
                  src={user.photoURL}
                  className="rounded-full border-4 border-white"
                  alt=""
                />
              </div>
            </div>
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Logout"
              onClick={handleSignOutUser}
              className=" btn rounded-full bg-[#FF1744] transition ease-in-out delay-100 duration-150 hover:bg-red-700 border-none hover:text-white"
            >
              <MdLogout />
              <span className="tooltip-text hidden md:flex">LogOut</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-0 md:gap-3">
            <Link
              to="/login"
              className={` flex items-center font-sm font-light btn:sm text-white md:btn-secondary  text-xs  p-2  md:text-sm rounded-full bg-none border-2 ${
                darkValue
                  ? "border-[#FF8F00] "
                  : "border-white hover:border-[#FF8F00]"
              }  transition duration-500 hover:bg-[#FF8F00] ease-in-out`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={` flex items-center font-sm font-light btn:sm text-white md:btn-secondary  text-xs  p-2  md:text-sm rounded-full bg-none border-2 ${
                darkValue
                  ? "border-[#FF8F00] "
                  : "border-white hover:border-[#FF8F00]"
              }  transition duration-500 hover:bg-[#FF8F00] ease-in-out`}
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
