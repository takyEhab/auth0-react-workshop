import React, { Fragment, useState } from "react";

import { Hero, HomeContent } from "../components";

const Home = () => {
  const [info, setInfo] = useState({})
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* <Hero />
    <hr />
    <HomeContent /> */}
      {/* <button
      // btn-block
      className="btn btn-primary mr-5"
    // onClick={() => loginWithRedirect()}
    >
Receive
    </button> */}
      <input placeholder="Username" />
      <input placeholder="Money" style={{ width: 150, textAlign: 'center', borderRadius: 40, margin: 20, borderWidth: 1 }} type="number" />
      <button
        // btn-block
        className="btn btn-primary "
      // onClick={() => setInfo({name:})}
      >
        Send
      </button>
      <button
        // btn-block
        className="btn btn-primary mt-5"
      // onClick={() => setInfo({name:})}
      >
        Create bank account
      </button>
    </div>
  )
};

export default Home;
