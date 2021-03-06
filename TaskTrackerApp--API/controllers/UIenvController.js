const asyncHandler = require("express-async-handler");
/**
 * @type {Invoice[]}
 */
let UIenv = [
  {
    name: "dev",
    REACT_APP_CLIENTID: "722392da-bc24-4083-b7c3-cadccf904d1c",
    REACT_APP_AUTHORITY:
      "https://login.microsoftonline.com/98c0cd0b-976c-495a-b757-ef8dc8943038",
    REACT_APP_HOMEPAGE: "http://localhost:3000/",
    REACT_APP_DASHBOARD: "http://localhost:3000/DashBoard",
    REACT_APP_ABOUT: "http://localhost:3000/about",
    REACT_APP_SIGNIN: "http://localhost:3000/auth/signIn",
    REACT_APP_SIGNOUT: "http://localhost:3000/auth/signOut",
  },
  {
    name: "prod",
    REACT_APP_CLIENTID: "722392da-bc24-4083-b7c3-cadccf904d1c",
    REACT_APP_AUTHORITY:
      "https://login.microsoftonline.com/98c0cd0b-976c-495a-b757-ef8dc8943038",
    REACT_APP_HOMEPAGE:
      "https://polite-island-001a81f10.1.azurestaticapps.net/",
    REACT_APP_DASHBOARD:
      "https://polite-island-001a81f10.1.azurestaticapps.net/DashBoard",
    REACT_APP_ABOUT:
      "https://polite-island-001a81f10.1.azurestaticapps.net/about",
    REACT_APP_SIGNIN:
      "https://polite-island-001a81f10.1.azurestaticapps.net/auth/signIn",
    REACT_APP_SIGNOUT:
      "https://polite-island-001a81f10.1.azurestaticapps.net/auth/signOut",
  },
];

const getUIenvdev = asyncHandler(async (req, res) => {
  const returnUIenv = UIenv.find((env) => env.name === "dev");

  res.status(200).json(returnUIenv);
});

const getUIenvprod = asyncHandler(async (req, res) => {
  const returnUIenv = UIenv.find((env) => env.name === "prod");

  res.status(200).json(returnUIenv);
});

module.exports = {
  getUIenvdev,
  getUIenvprod,
};
