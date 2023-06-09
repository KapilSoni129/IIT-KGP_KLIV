import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="newsletter-container">  
        <h3>Our Newsletter</h3>
        
          <p>Subscribe to our newsletter:</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="card-button">Subscribe</button>
          </div>
        </div>
      </center>
      <footer style={{ backgroundColor: 'white' }}>
        <div className="footer-section">
          <div className="footer-left">
            <span>FedERA</span>
          </div>
          <p>Federated Learning is a machine learning technique for training models on distributed data without sharing it. In traditional machine learning, large datasets must first be collected and then sent to one location where they can be combined before the model is trained on them. However, this process can cause privacy concerns as sensitive personal data may become publicly available. Federated learning attempts to address these concerns by keeping individual user’s data local while still allowing for powerful powerful statistical analysis that can be used to create accurate models at scale.</p>

          <div className="footer-about">
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <ul className="useful-links">
            <b>
              <li>Useful Links</li>
            </b>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="our-services">
            <b>
              <li>Our Services</li>
            </b>
            <li>Collaborative Learning</li>
            <li>Web Development</li>
            <li>Android Development</li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="contact-us">
            <b>
              <p>Contact Us</p>
            </b>
            <p>A108 Adam Street</p>
            <p> New York, NY 535022</p>
            <p>United States</p>
            {/* <p> </p> */}
            <p>
              <b>Phone:</b>
            </p>
            <p>
              <b>Email:</b> fedra.team@gmail.com
            </p>
          </div>
        </div>
        <div className="footer-section footer-bottom">
          <p className="copyright">
            &copy; FedERA All Rights Reserved. Developed by Kapil Soni
          </p>
        </div>
        {/* <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FaArrowUp />
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
