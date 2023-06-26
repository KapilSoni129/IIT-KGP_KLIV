import {React, useState} from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { FaGithub, FaArrowUp } from 'react-icons/fa';

import './Navigation.css';

const Navigation = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGithubClick = () => {
    window.open('https://github.com/your-repository-url', '_blank');
  };

  const handleNavigation = () => {
    navigate("/");
  };

  const handleToggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <nav>
      <div className="logo">
        <div className="menu-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <span className="company-name">FedERA</span>
      </div>
      <ul className={sidebarActive ? 'hide' : ''}>
        <li>
          <button onClick={handleNavigation} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={handleNavigation} className="nav-button">
            Services
          </button>
        </li>
        <li>
          <button onClick={handleNavigation} className="nav-button">
            Team
          </button>
        </li>
        <li>
          <button onClick={handleNavigation} className="nav-button">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Review
          </button>
        </li>
      </ul>
      
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <ul>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Services
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Team
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation} className="nav-button">
            Review
          </button>
        </li>
        </ul>
      </div>

      <div className="scroll-to-top" onClick={handleScrollToTop}>
        <FaArrowUp className='arrow-icon'/>
      </div>

      <div className="github-button" onClick={handleGithubClick}>
        <FaGithub className="github-icon" />
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
