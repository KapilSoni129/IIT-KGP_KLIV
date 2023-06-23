import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navigation from './shared/Navigation/components/Navigation';
import Footer from './shared/Footer/components/footer';

import Landing from './sections/Landing/landing';
import Review from './sections/Review/review';
import LoginForm from './sections/Admin/login';
import Adminpage from './sections/Admin/Adminpage';

import Carbon from './sections/Services/Modules/carbon';
import Intermediate from './sections/Services/Modules/intermediate';
import Timeout from './sections/Services/Modules/timeout';
import Verification from './sections/Services/Modules/verification';

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
            <Route path="/review" element={<Review />} />
            <Route path="/admin" element={<LoginForm />} />
            <Route path="/adminpage" element={<Adminpage />} />
            <Route path="/module/carbon" element={<Carbon />}/>
            <Route path="/module/intermediate" element={<Intermediate />}/>
            <Route path="/module/timeout" element={<Timeout />}/>
            <Route path="/module/verification" element={<Verification />}/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
          
      <Footer />
    </div>
  );
}

export default App;
