import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

// const ADMIN_ID = 'FedERA';
// const ADMIN_PASSWORD = 'FedERA';

function LoginForm({onLogin}){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulating login validation
      if (username === process.env.REACT_APP_ADMIN_ID && password === process.env.REACT_APP_ADMIN_PASSWORD) {
        // Redirect to admin page
        localStorage.setItem('isLoggedIn', 'true');
        // eslint-disable-next-line no-undef
        onLogin(); // Call the onLogin function from props
        navigate('/adminpage');
      } else {
        // Show error message
        setError('Wrong username or password');
      }
    };

    useEffect(() => {
      // Check login status on component mount
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
      if (isLoggedIn) {
        onLogin(); // Call the onLogin prop function
      }
    }, [onLogin]);

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
