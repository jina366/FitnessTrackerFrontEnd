import React, { useState, useEffect } from 'react';
import { Navbar, Register, Login } from './';
import { Routes, Route } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../utils/localStorage';

const Main = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(getTokenFromLocalStorage());
  }, []);

  return (
    <div id="main">
      <Navbar setToken={setToken} />
      <h1>{token}</h1>
      <Routes>
        <Route
          path="/users/register"
          element={<Register setToken={setToken} />}
        />
        <Route path="/users/login" element={<Login setToken={setToken} />} />
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
};

export default Main;
