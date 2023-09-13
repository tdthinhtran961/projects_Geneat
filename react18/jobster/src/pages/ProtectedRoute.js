import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to={"/landing"}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
