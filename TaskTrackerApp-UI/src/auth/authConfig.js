/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT Liceanse.
 */

import { LogLevel } from "@azure/msal-browser";

/*
*
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
* 
*auth: {
        clientId: "a229dc8d-edc4-4e97-9f9d-f5904cfbec1a", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/98c0cd0b-976c-495a-b757-ef8dc8943038", // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: "/", // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
        postLogoutRedirectUri: "http://localhost:3000/", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
auth: {
        clientId: "a229dc8d-edc4-4e97-9f9d-f5904cfbec1a",
        authority: "https://login.microsoftonline.com/98c0cd0b-976c-495a-b757-ef8dc8943038",
        redirectUri: "https://polite-island-001a81f10.1.azurestaticapps.net",
        postLogoutRedirectUri: "https://polite-island-001a81f10.1.azurestaticapps.net"
    },
*
*
*/
export const msalConfig = {
    auth: {
        clientId: `${process.env.REACT_APP_CLIENTID}`,
        authority: `${process.env.REACT_APP_AUTHORITY}`,
        redirectUri: `${process.env.REACT_APP_SIGNIN}`,
        postLogoutRedirectUri: `${process.env.REACT_APP_HOMEPAGE}`
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
                    default : console.log("")
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net"
};
