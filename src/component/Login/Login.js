import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  navigate(from, { replace: true });
  return (
    <div>
      <h1>login</h1>
    </div>
  );
};

export default Login;
