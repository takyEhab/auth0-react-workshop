// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from 'react-dropdown';
import './style.css';
import { BiLogOut } from 'react-icons/bi';
import { NavLink } from "react-router-dom";


const LogoutButton = () => {
  const { logout, user: { picture } } = useAuth0();
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <div className="dropdown" >
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={picture}
          alt="Profile"
          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          style={{
            width: 60, height: 60
          }}
        />
        {isOpen &&
          <div class="dropdown-content">
            <h6>Cash: 1000</h6>
            <NavLink
              to="/profile"
              exact
              className="btn btn-primary btn-block"
            >
              Profile
            </NavLink>
            {/* <button
            className="btn btn-primary btn-block"
            href="#">Profile</button> */}

            <button
              className="btn btn-danger btn-block"
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              {/* <span>log</span> */}
              <BiLogOut style={{ marginRight: 10 }} />
              Log Out
            </button>
          </div>

        }


      </div>


    </div>

    // <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

    // <button
    //   className="btn btn-danger btn-block"
    //   onClick={() =>
    //     logout({
    //       returnTo: window.location.origin,
    //     })
    //   }
    // >
    //   Log Out
    // </button>
  );
};

export default LogoutButton;
