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

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
