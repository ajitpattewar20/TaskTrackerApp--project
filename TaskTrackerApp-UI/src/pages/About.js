import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AuthenticatedTemplate, 
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import { loginRequest } from "../auth/authConfig";

const NavigationBar = () => {
  const { instance } = useMsal();

  return (
    <>
      <AuthenticatedTemplate>
        <ul className="ml-auto">
          <li>
            <button
              onClick={() =>
                instance.logoutPopup({
                  postLogoutRedirectUri: "https://github.com/ajitpattewar20",
                  mainWindowRedirectUri: "/",
                })
              }
            >
              Sign out using Popup
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                instance.logoutRedirect({
                  postLogoutRedirectUri: "https://github.com/ajitpattewar20",
                })
              }
            >
              Sign out using Redirect
            </button>
          </li>
        </ul>

        <button className="ml-auto" onClick={() => instance.logout()}>
          Sign out
        </button>

        <form action="/">
          <button class="float-left submit-button">Home</button>
        </form>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <ul>
          <li>
            <button onClick={() => instance.loginPopup(loginRequest)}>
              Sign in using Popup
            </button>
          </li>
          <li>
            <button onClick={() => instance.loginRedirect(loginRequest)}>
              Sign in using Redirect
            </button>
          </li>
        </ul>
      </UnauthenticatedTemplate>
    </>
  );
};

const PageLayout = (props) => {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`}>
        <a className="navbar-brand" href="/">
          Microsoft identity platform
        </a>
        <NavigationBar />
      </nav>
      <br />
      <h5>
        <center id="title">
          Welcome to the Microsoft Authentication Library For React Tutorial
        </center>
      </h5>
      <br />
      {props.children}
      <br />
      <AuthenticatedTemplate>
        <footer>
          <center>How did we do? Share your experience!</center>
        </footer>
      </AuthenticatedTemplate>
    </>
  );
};

const IdTokenClaims = (props) => {
  return (
    <div id="token-div">
      <p>
        <strong>Audience: </strong> {props.idTokenClaims.aud}
      </p>
      <p>
        <strong>Issuer: </strong> {props.idTokenClaims.iss}
      </p>
      <p>
        <strong>OID: </strong> {props.idTokenClaims.oid}
      </p>
      <p>
        <strong>UPN: </strong> {props.idTokenClaims.preferred_username}
      </p>
    </div>
  );
};

const IdTokenContent = () => {
  const { accounts } = useMsal();
  const [idTokenClaims, setIdTokenClaims] = useState(null);

  function GetIdTokenClaims() {
    setIdTokenClaims(accounts[0].idTokenClaims);
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {idTokenClaims ? (
        <IdTokenClaims idTokenClaims={idTokenClaims} />
      ) : (
        <button onClick={GetIdTokenClaims}>View ID Token Claims</button>
      )}
    </>
  );
};

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <IdTokenContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function About() {
  return (
    <PageLayout>
      <MainContent />
      <Link className="dsahlink" to="/">
        Home
      </Link>
    </PageLayout>
  );
}
