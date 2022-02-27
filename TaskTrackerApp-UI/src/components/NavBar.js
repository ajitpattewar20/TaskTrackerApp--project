import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useIsAuthenticated } from "@azure/msal-react";

const useStyles = makeStyles({
  navbarBg: {
    backgroundColor: "#f1f5fd",
    padding: "0",
    zIndex: "99",
    position: "relative",
  },
  navbarBrand: {
    fontSize: "2.5rem",
    padding: "0 0 0 10px",
    verticalAlign: "middle",
  },
  logoimg: {
    marginLeft:"20px",
    height: "42px",
 
  },
  verticalAlign: "middle",
  containerMargin: {
    margin: "0 25px",
  },
});
/**------------signIn and signOut button component---------start */
const SignInButton = () => {
  const classes = useStyles();
  return (
    <NavLink
      className={`btn  btn-style btn-style-border ${classes.verticalAlign}`}
      to="/auth/signIn"
    >
      Sign In
    </NavLink>
  );
};
const SignOutButton = () => {
  const classes = useStyles();
  return (
    <NavLink
      className={`btn  btn-style btn-style-border ${classes.verticalAlign}`}
      to="/auth/signOut"
    >
      Sign Out
    </NavLink>
  );
};
/**------------signIn and signOut button component---------end */

const Navbar = () => {
  const classes = useStyles();
  const isAuthenticated = useIsAuthenticated();
  const [show, setShow] = useState(false);

  return (
    <>
      <section class={`navbar-bg ${classes.navbarBg}`}>
        <nav class={`navbar navbar-expand-lg navbar-light`}>
          <div class={`container-fluid ${classes.containerMargin}`}>
            <Link to="/">
              <img
                src="/B042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRy/favicon.png"
                class={classes.logoimg}
                alt=""
              />
              <span className={`navbar-brand ${classes.navbarBrand}`}>
                Task Tracker
              </span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/DashBoard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

/*
import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/DashBoard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
*/
