import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Components/Errorpage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import SignupLayout from "../Layout/SignupLayout";
import SingleCollegePage from "../Pages/SingleCollegePage/SingleCollegePage";

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
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    errorElement: <Errorpage></Errorpage>,
  },
  {
    path: "/signup",
    element: <SignupLayout></SignupLayout>,
    errorElement: <Errorpage></Errorpage>,
  },
  {
    path: "/:id",
    element: <SingleCollegePage></SingleCollegePage>,
    loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
  },
]);
