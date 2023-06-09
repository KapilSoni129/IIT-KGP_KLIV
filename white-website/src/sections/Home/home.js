import React from 'react';

import './home.css';


function Home() {
  console.log(0);
  return (
    <div className='hero'>
      <div className="content-left">
        <h1>The future is distributed learning.</h1>
        <p>
         FedERA is a highly dynamic and customizable framework that can accommodate many use cases with flexibility by implementing several functionalities over different federated learning algorithms, and essentially creating a plug-and-play architecture to accommodate different use cases..
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
