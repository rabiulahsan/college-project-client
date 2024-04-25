/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import Skeleton from "../Components/Skeleton/Skeleton";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        <Skeleton number={9}></Skeleton>
      </div>
      // setLoading(false);
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
