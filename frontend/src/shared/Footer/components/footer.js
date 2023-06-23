import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div>
      <center>
        <br />
        <br />
        <br />
        <br />
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
            <a href="https://linkedin.com">  
            </a>
            <a href="https://twitter.com">
            </a>
            <a href="mailto:fedra.team@gmail.com">
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
            <p>IIT Kharagpur</p>
            <p>Kharagpur, West Bengal</p>
            <p>721302, India</p>
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
      </footer>
    </div>
  );
};

export default Footer;
