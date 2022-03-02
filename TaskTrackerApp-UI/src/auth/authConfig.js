import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: `722392da-bc24-4083-b7c3-cadccf904d1c`,
    authority: `https://login.microsoftonline.com/98c0cd0b-976c-495a-b757-ef8dc8943038`,
    redirectUri: `https://green-ocean-0e29caa0f.1.azurestaticapps.net/auth/signIn`,
    postLogoutRedirectUri: `https://green-ocean-0e29caa0f.1.azurestaticapps.net/`,
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            console.log("");
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: [],
};
