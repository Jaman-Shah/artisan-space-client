/**
 * file structure:
 * 1. using ReactDOM from react-dom/client
 * 2. import RouterProvider form react-router-dom
 * 3. index.css for styling the whole application
 * 4. imported routers from another routers files
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routers } from "./routers/Routers.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
      <ToastContainer />
    </AuthProvider>
    <Tooltip id="my-tooltip" />
  </React.StrictMode>
);
