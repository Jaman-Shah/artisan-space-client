/**
 * File structure :
 * 1. All the router are here of the application
 */

import { createBrowserRouter } from "react-router-dom";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
