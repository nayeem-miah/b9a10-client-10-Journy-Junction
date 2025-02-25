/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
    // return <span className="loading loading-spinner ml-96 loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRoute;
