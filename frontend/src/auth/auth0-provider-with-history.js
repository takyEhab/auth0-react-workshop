// src/auth/auth0-provider-with-history.js

import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  const sessionStorageCache = {
    get: function (key) {
      return JSON.parse(sessionStorage.getItem(key));
    },

    set: function (key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    },

    remove: function (key) {
      sessionStorage.removeItem(key);
    },

    // Optional
    allKeys: function () {
      return Object.keys(sessionStorage);
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      // cache={sessionStorageCache}
      // cacheLocation: 'localstorage'
    cacheLocation="localstorage"

    // authorizeTimeoutInSecond={20}
    // useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
