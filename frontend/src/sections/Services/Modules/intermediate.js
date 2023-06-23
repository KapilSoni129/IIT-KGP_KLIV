import React from 'react';

import './modules.css'

function Intermediate() {
    return ( 
        <div className="intermediate-content">
            <h2>Intermediate</h2>
            <ul className='bullet-list'>
                <li>Now, even during the middle of a communication round, the server can accept new client connections, incorporate them into the Client_Manager and even include them in the ongoing communication round as well.</li>
                <li>The server can be easily configured to allow or reject new connections during different parts of Federated Learning.</li>
                <li>Safeguards to notify when a client has disconnected anytime have been implemented.</li>
            </ul>
        </div>
    )
};

export default Intermediate;