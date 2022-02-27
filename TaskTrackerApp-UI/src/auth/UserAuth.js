import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../auth/authConfig";


function SignINuser(){
    const { instance } = useMsal();
    instance.loginRedirect(loginRequest)
}

function SignOUTuser(){
    const { instance } = useMsal();
    instance.logoutRedirect();
    
    /* instance.logout() */
}

export default{
    SignINuser,SignOUTuser
}