/**
 * File structure :
 * 1. All the router are here of the application
 */

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
