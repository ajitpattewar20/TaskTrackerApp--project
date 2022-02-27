import React from "react";
import { Link } from "react-router-dom";

import {
  AuthenticatedTemplate, 
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
      <h5 className="card-title">
          sign-in Successfully.
        </h5>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

function Dashboard() {
  //window.location.replace("http://www.w3schools.com");
  return (
    <>
    <div>Dashboard</div>
    <MainContent />
      <Link className="dsahlink" to="/">
        Home
      </Link>
    </>
  )
}

export default Dashboard

/* import React from "react";

function About() {
  return (
    <>
    about
    </>
  );
}



to open a website using javascript in new tab
function myFunction() {
  window.open("https://www.w3schools.com");
}

for in same tab
  window.location.replace("http://www.w3schools.com");


export default About; */
