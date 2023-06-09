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
            <span>KLIV</span>
          </div>
          <p>About section</p>

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
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="our-services">
            <b>
              <li>Our Services</li>
            </b>
            <li>Collaborative Learning</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
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
              <b>Phone:</b> +1 555-123-4567
            </p>
            <p>
              <b>Email:</b> info@example.com
            </p>
          </div>
        </div>
        <div className="footer-section footer-bottom">
          <p className="copyright">
            &copy; KLIV All Rights Reserved. Developed by KAPIL SONI
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
