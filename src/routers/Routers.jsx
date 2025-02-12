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
import CraftDetails from "../components/CraftDetails/CraftDetails";
import UpdateCraft from "../components/UpdateCraft/UpdateCraft";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SubCategoryPage from "../components/SubCategoryPage/SubCategoryPage";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allartandcraft",
        element: <AllArtAndCraft />,
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
        path: "/craftdetails/:id",
        element: <CraftDetails />,
        loader: ({ params }) =>
          fetch(
            `https://artisan-space-server.vercel.app/getcraft/${params.id}`
          ),
      },
      {
        path: "/updatecraft/:id",
        element: <UpdateCraft />,
        loader: ({ params }) =>
          fetch(
            `https://artisan-space-server.vercel.app/getcraft/${params.id}`
          ),
      },
      {
        path: "/crafts/:subcategory",
        element: <SubCategoryPage />,
        loader: ({ params }) =>
          fetch(
            `https://artisan-space-server.vercel.app/getcraftsbycategory/${params.subcategory}`
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
