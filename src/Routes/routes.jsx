import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Components/Errorpage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";

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
