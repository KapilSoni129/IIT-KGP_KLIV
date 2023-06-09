import React from 'react';
import { BrowserRouter as Router, useNavigate, Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

import './Navigation.css';

const Navigation = () => {

  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
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
        <li>
          <button onClick={() => handleNavigation('/')} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/about')} className="nav-button">
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/services')} className="nav-button">
            Services
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/team')} className="nav-button">
            Team
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/contact')} className="nav-button">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/review')} className="nav-button">
            Review
          </button>
        </li>
      </ul>
      <div className="scroll-to-top" onClick={handleScrollToTop}>
        <FaArrowUp />
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        {/* Your other app components */}
      </div>
    </Router>
  );
};

export default App;
