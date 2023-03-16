import React, { useState, useEffect } from 'react';
import { loginAccount } from '../apiAdapters';
import { saveToLocalStorage } from '../utils/localStorage';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function getLogin(username, password) {
    try {
      const result = await loginAccount(username, password);

      if (result.token !== undefined) {
        setToken(result.token);
        saveToLocalStorage(result.token);
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getLogin(username, password);
          }}
        >
          <h3>Username</h3>
          <input
            name="username"
            type="text"
            value={username}
            minLength="6"
            autoComplete="username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <h3>Password</h3>
          <input
            name="password"
            type="password"
            value={password}
            autoComplete="password"
            minLength="8"
            required
            onChange={(e) => {
              console.log(password);
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
