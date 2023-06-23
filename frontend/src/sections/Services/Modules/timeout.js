import React from 'react';

import './modules.css'

function Timeout() {
    return ( 
        <div className="timeout-content">
            <h2>Timeout module</h2>
            <ul className='bullet-list'>
                <li>Often in real world scenarios, clients cannot keep training indefinitely. Therefore, a timeout functionality has been implemented.</li>
                <li>The server can specify a timeout parameter as a Train order configuration. The client will then train till the timeout occurs, and then return the results.</li>
            </ul>
            <center><h3>Steps in the Timeout module</h3></center>
        </div>
    )
};

export default Timeout;