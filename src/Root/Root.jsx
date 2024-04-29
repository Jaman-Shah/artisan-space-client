/**
 * file structure:
 * ###this is the Root jsx of the application
 * 1. there is a nav bar
 * 2. there is footer
 * 3. there is a outlet for child elements
 */

import React, { useContext } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../providers/ThemeProvider";

const Root = () => {
  const { darkValue } = useContext(ThemeContext);
  return (
    <div className={`${darkValue ? "bg-[#23272F] text-white" : "bg-blue-100"}`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
