import React from 'react';

import './modules.css'

function Verification() {
    return ( 
        <div className="verification-content">
            <h2>Verification Module</h2>
            <ul className='bullet-list'>
                <li>After the server receives the trained weights, it aggregates all of them to form the new model. However, the selection of models for aggregation can be modified.</li>
                <li>Before aggregation, the server passes the models to a Verification module, which then uses a predefined procedure to generate scores for models, and then returns only those models that have performed above a defined threshold.</li>
                <li>The Verification module can be easily customized.</li>
            </ul>
            <center><h3>Steps in the Verification module</h3></center>
            <center><h3>Modified Federated Learning architecture</h3></center>
        </div>
    )
};

export default Verification;