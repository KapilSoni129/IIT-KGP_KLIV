import React from 'react';

import './landing.css';
import Cust from '../Review/cust';
import Home from '../Home/home';
import Services from '../Services/services';
import Team from '../Team/team';
import Contact from '../Contact/contact';

function Landing(){
    return(
        <div>
            <Home/>
            <Services/>
            <Team/>
            <Cust/>
            <Contact/>
        </div>
    );
}

export default Landing;