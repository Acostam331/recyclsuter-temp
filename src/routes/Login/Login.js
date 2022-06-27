import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/Auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const loginHandler = async () => {
    const data = await login(username, pass);
    if (data.status === 200) {
      window.localStorage.setItem('token', data.data.token);
      window.location.reload();
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-title-container">
          <p className="title-login">Recycluster</p>
          <p className="subtitle-login">Admin website</p>
        </div>
        <div className="login-input-container">
          <input
            type="text"
            className="input-login"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
          />
          <input
            type="password"
            className="input-login"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="login-right-container">
        <div className="login-logo-container">
          <p>logo</p>
        </div>
        <div className="login-submit-container">
          <Link
            className="login-button"
            onClick={() => {
              loginHandler();
            }}
            to="app"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
