import React, { useEffect as UseEffect } from "react";
import { useNavigate as UseNavigate} from "react-router-dom";
import {
  useMsal as UseMsal,
  useIsAuthenticated as UseIsAuthenticated,
} from "@azure/msal-react";
/* import { loginRequest } from "../auth/authConfig";
import {PreloaderC} from "../components/Cimport"  */

function SignOUTuser() {
  const { instance } = UseMsal();
  instance.logoutRedirect();
  /* instance.logout() */
}

function redirect() {
  let navigate = UseNavigate();

    UseEffect(() => {
      const timer = setTimeout(() => navigate("/"), 1);
      return () => clearTimeout(timer);
    }, []);

  }

function signOut() {
  const isAuthenticated = UseIsAuthenticated();
  return (
    <>
      {isAuthenticated
        ? SignOUTuser()
        : redirect()}
    </>
  );
}
export default signOut;

/* function myFunction() {
    window.open("https://www.google.com");
  }

  myFunction();
   */
/*   window.onload = function() {
    window.open("https://www.google.com");
} 


to open a website using javascript in new tab
function myFunction() {
  window.open("https://www.w3schools.com");
}

for in same tab
  window.location.replace("http://www.w3schools.com");






*/
