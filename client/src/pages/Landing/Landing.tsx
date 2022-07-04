import React from 'react';

import './Landing.css';

const Landing = () => {


  return (
    <div className="Landing">
      <nav>
        <h2 className="appName">Knoted</h2>
        <button className="launchButton">Launch</button>
      </nav>
      <div className="heroSection">
        <h2 className="heroText">A dashboard to connect you to the services you use as a student.</h2>
        <div className="divider"></div>
        <div className="heroButtons">
          <button className="registerButton">Get Started</button>
          <button className="launchButton">Launch</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;