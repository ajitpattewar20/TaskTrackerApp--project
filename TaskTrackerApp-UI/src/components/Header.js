import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { getenv } from "../environment/Myenv";

const useStyles = makeStyles({
  Headercss: {
    minHeight: "90vh !important",
  },
  sectioncss: {
    maxHeight: "90vh !important",
  },
  NavLink: {
    padding: "7px 10px",
    verticalAlign: "middle",
    marginTop: "20px",
  },
});

const Header = () => {
  const classes = useStyles();
  let env = getenv();
  console.log(env.REACT_APP_CLIENTID);
  return (
    <>
      <header className={`${classes.Headercss}`}>
        <section
          className={`container main-hero-container ${classes.sectioncss}`}
        >
          <div className="row">
            <div className="col header-center-side d-flex justify-content-center flex-column align-items-center ">
              <h1 className="display-2">Organize it all with</h1>
              <h1 className="display-3">Task Tracker App</h1>
              <p className="main-hero-para">
                Easy and simplest to use. Yet powerful and productive
              </p>

              <div className="d-flex flex-column align-items-center">
                <h3>Get access for you Now!</h3>

                <NavLink
                  className={`btn  btn-style btn-style-border ${classes.NavLink}`}
                  to="/auth/signIn"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
