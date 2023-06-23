import React from 'react';

import Rev from '../Review/admindelete'
import './Adminpage.css';

function Adminpage() {
    return (
        <div className='fill-admin'>
        <div className='container-admin'>
            <h2>Admin Page</h2>
            <Rev />
        </div>
        </div>
    );
}

export default Adminpage;