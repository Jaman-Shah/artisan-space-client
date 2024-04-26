/**
 * File structure :
 * 1. All the router are here of the application
 */

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import ArtAndCraft from "../components/ArtAndCraft/ArtAndCraft";
import AddCraft from "../components/AddCraft/AddCraft";
import MyArtAndCraft from "./../components/MyArtAndCraft/MyArtAndCraft";
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
        path: "/artandcraft",
        element: <ArtAndCraft />,
      },
      {
        path: "/addcraft",
        element: <AddCraft />,
      },
      {
        path: "/myartandcraft",
        element: <MyArtAndCraft />,
      },
    ],
  },
]);
