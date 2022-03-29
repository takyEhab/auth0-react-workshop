// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <button
        className="btn btn-primary btn-block"
        style={{ margin: 10}}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
      <button
        className="btn btn-secondary btn-block"
        style={{ margin: 10}}

        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginButton;
