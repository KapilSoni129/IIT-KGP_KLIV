import React from 'react';

import './home.css';


function Home() {
  console.log(0);
  return (
    <div className='hero'>
      <div className="content-left">
        <h1>The future is federated.</h1>
        <p>
          We help developers solve the world's most important problems by unlocking the value from sensitive data, without increasing the risk.
        </p>
        <button className="card-button">Get started</button>
      </div>
      <div className="right-content">
        <img
          src="https://speechlogger.com/assets/img/hero-img.png"
          alt="Hero"
          className="animated-image"
        />
      </div>
    </div>
  );
}

export default Home;
