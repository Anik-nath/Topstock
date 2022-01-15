import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user,isloading } = useAuth();
  
  let location = useLocation();

  if(isloading){
    return <Spinner animation="grow" />
   }

  if (user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
