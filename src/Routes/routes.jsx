import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Components/Errorpage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import SignupLayout from "../Layout/SignupLayout";
import SingleCollegePage from "../Pages/SingleCollegePage/SingleCollegePage";
import Colleges from "../Pages/Colleges/Colleges";
import AdmissionPage from "../Pages/AdmissionPage/AdmissionPage";
import MyColleges from "../Pages/MyColleges/MyColleges";
import CollegeFormPage from "../Pages/AdmissionPage/CollegeFormPage";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import SearchPage from "../Pages/SearchPage/SearchPage";

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

        element: (
          <PrivateRoutes>
            <SingleCollegePage></SingleCollegePage>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/admission/:id",
        element: (
          <PrivateRoutes>
            <CollegeFormPage></CollegeFormPage>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoutes>
            <AdmissionPage></AdmissionPage>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycolleges",
        element: (
          <PrivateRoutes>
            <MyColleges></MyColleges>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/search/:value",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);
