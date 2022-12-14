import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {checkUser} from "../Components/Authentication/AuthService";
import Home from "../Components/Home/Home";

const ProtectedRoute = ({ element: Component, flag, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };
  console.log("rest: ", rest);
  if (checkUser()){
    return <Component />;
  }
  else{
    return <Home />;
  }
};

export default ProtectedRoute;
