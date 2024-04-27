/**
 * File structure :
 * 1. All the router are here of the application
 */

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import AddCraft from "../components/AddCraft/AddCraft";
import MyArtAndCraft from "./../components/MyArtAndCraft/MyArtAndCraft";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllArtAndCraft from "../components/AllArtCraft/AllArtCraft";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allartandcraft",
        element: <AllArtAndCraft />,
        loader: () => fetch("http://localhost:5003/getallcrafts"),
      },
      {
        path: "/addcraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/myartandcraft",
        element: (
          <PrivateRoute>
            <MyArtAndCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
