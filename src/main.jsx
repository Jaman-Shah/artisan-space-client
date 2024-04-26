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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
