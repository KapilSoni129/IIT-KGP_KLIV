import React, { useEffect } from 'react';
import './about.css';

function About() {
  useEffect(() => {
    const aboutContainer = document.querySelector('.about-container');
    aboutContainer.classList.add('fade-in');
  }, []);

  return (
    <div>
        <div className="about-container">
        <center>
            <h4>WHO ARE WE</h4>
            <h1>About Us</h1>
            <p>This is the content of the About section.</p>
        </center>
            <img className="about-image" src="https://library.wu.ac.th/km/wp-content/uploads/sites/9/2022/06/fbe8e46f21.jpg" alt="Hero" />
       
            </div>
    
    </div>
    
  );
}

export default About;
