import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { NavLink } from "react-router-dom";
import { NavBarC, HeaderC } from "../components/Cimport.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  alert: {
    backgroundColor: "#00ffb58a",
    justifyContent: "center",
    padding: "7px 0px",
    position: "absolute",
    width: "100%",
  },
  alertmsg: {
    alignSelf: "center",
    marginRight: "25px",
    fontSize: "16px",
    textDecoration: "underline",
    marginBottom: "0",
  },
  alertmsg2: {
    alignSelf: "center",
    marginRight: "25px",
    fontSize: "16px",
    marginBottom: "0",
  },
  alertdash: {
    width: "auto",
    fontSize: "13px",
  },
});

const Viewdashboard = () => {
  const classes = useStyles();
  return (
    <div className={`d-flex ${classes.alert}`}>
      <h3 className={`${classes.alertmsg}`}>Successfully &nbsp; Sign In !</h3>
      <NavLink
        className={`btn  btn-style-border ${classes.alertdash}`}
        to="/DashBoard"
      >
        View Dashboard
      </NavLink>
    </div>
  );
};

const Logintoviewdashboard = () => {
  const classes = useStyles();
  return (
    <div className={`d-flex ${classes.alert}`}>
      <h3 className={`${classes.alertmsg2}`}>Sign In To view DashBoard</h3>
      <NavLink
        className={`btn  btn-style-border ${classes.alertdash}`}
        to="/DashBoard"
      >
        Sign In
      </NavLink>
    </div>
  );
};

function Home() {
  return (
    <div>
      <NavBarC />
      <div>
        <AuthenticatedTemplate>
          <Viewdashboard />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Logintoviewdashboard />
        </UnauthenticatedTemplate>
      </div>
      <HeaderC />
    </div>
  );
}

export default Home;
/*
return (

 <Outlet />


  <div>
    <nav>
      {invoices.map((invoice) => (
        <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
          {invoice.name}
        </Link>
      ))}
    </nav>
  </div>
);

 
<NavBarC />
          <div>home1</div>


const Userdata = () => {
  const { accounts } = useMsal();
  return <h5 className="card-title">{`Welcome ${accounts[0].name}`}</h5>;
};

function Home() {
  return (
    <div>
      <NavBarC />
      <AuthenticatedTemplate>
        <div>home1</div>
        <Userdata />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div>home1</div>
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
}



 */
