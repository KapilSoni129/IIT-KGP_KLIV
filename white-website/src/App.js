import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navigation from './shared/Navigation/components/Navigation';
import Footer from './shared/Footer/components/footer';

import Landing from './sections/Landing/landing';
import About from './sections/About/about';
import Services from './sections/Services/services';
import Contact from './sections/Contact/contact';
import Team from './sections/Team/team';
import Review from './sections/Review/review';

function App() {

  // useEffect(() => {
  //   const aboutContainer = document.querySelector('.about-container');
  //   aboutContainer.classList.add('fade-in');
  // }, []);

  return (
    <div className="App">
      <Navigation />
      <br></br><br></br><br></br><br></br>
      <Router>
      <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/review" element={<Review />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
          
      <Footer />
    </div>
  );
}

export default App;
