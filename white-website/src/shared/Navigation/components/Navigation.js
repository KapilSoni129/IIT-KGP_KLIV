import React, { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const modalRef = useRef(null);

  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    // You can perform login authentication here
    console.log('Email:', email);
    console.log('Password:', password);
    handleCloseModal();
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    setShowScrollButton(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Router>
      <nav>
        <div className="logo">
          <div className="menu-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="company-name">KLIV</span>
        </div>
        <ul>
          <li className={activeSection === 'Home' ? 'active' : ''}>
            <button
              onClick={() => {
                handleNavigation('Home');
                document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </button>
          </li>
          <li className={activeSection === 'About' ? 'active' : ''}>
            <button
              onClick={() => {
                handleNavigation('About');
                document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </button>
          </li>
          <li className={activeSection === 'Services' ? 'active' : ''}>
            <button
              onClick={() => {
                handleNavigation('Services');
                document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </button>
          </li>
          <li className={activeSection === 'Team' ? 'active' : ''}>
            <button
              onClick={() => {
                handleNavigation('Team');
                document.getElementById('team-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Team
            </button>
          </li>
          <li className={activeSection === 'Contact' ? 'active' : ''}>
            <button
              onClick={() => {
                handleNavigation('Contact');
                document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </button>
          </li>
          <li>
            <button onClick={handleLoginButtonClick} className="card-button">
                Login
            </button>
            {showModal && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleLoginFormSubmit}>
              <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} required />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} required />
              </div>
              <button className="card-button">Login</button>
            </form>
          </div>
        </div>
      )}
          </li>
        </ul>
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      </nav>
    </Router>
  )
};

export default Navigation;
