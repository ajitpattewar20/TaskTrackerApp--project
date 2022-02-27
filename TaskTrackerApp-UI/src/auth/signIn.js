import React, { useEffect as UseEffect } from "react";
import { useNavigate as UseNavigate} from "react-router-dom";
import {
  useMsal as UseMsal,
  useIsAuthenticated as UseIsAuthenticated,
} from "@azure/msal-react";
import { loginRequest } from "../auth/authConfig";

function SignINuser() {
  const { instance } = UseMsal();
  instance.loginRedirect(loginRequest);
}

function redirect() {
  let navigate = UseNavigate();

    UseEffect(() => {
      const timer = setTimeout(() => navigate("/DashBoard"), 1);
      return () => clearTimeout(timer);
    }, []);

  }

function signIn() {
  const isAuthenticated = UseIsAuthenticated();

  return (
    <>
      {isAuthenticated ? redirect() : SignINuser()}
    </>
  );
}

export default signIn;
/*  
function redirect() {
  window.location.replace(
    "https://polite-island-001a81f10.1.azurestaticapps.net/DashBoard"
  );
  alert("log in successfully");
}


{isAuthenticated ? redirect : SignINuser}
<button onClick={SignINuser()}>Sign in</button>{" "}
      <button onDoubleClick={redirect}>redirect</button>


isAuthenticated
        ? window.location.replace(
            "https://polite-island-001a81f10.1.azurestaticapps.net/DashBoard"
          )
        : SignINuser() */
