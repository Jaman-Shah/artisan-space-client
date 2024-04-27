/**
 * file structure:
 * ###this is the Root jsx of the application
 * 1. there is a nav bar
 * 2. there is footer
 * 3. there is a outlet for child elements
 */

import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
