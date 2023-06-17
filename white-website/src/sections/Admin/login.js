import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

function LoginForm(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Simulating login validation
        if (username === 'FedERA' && password === 'FedERA@129') {
          // Redirect to admin page
          navigate('/adminpage');
        } else {
          // Show error message
          setError('Wrong username or password');
        }
      };

  return (
    <div className='fill'>
    <div className='container'>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <center><button className='card-button' type="submit">Login</button></center>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
