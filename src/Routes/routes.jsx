import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Components/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
