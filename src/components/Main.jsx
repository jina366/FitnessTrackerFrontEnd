import React, { useState, useEffect } from 'react';
import { Navbar, Register, Login, Routines, MyRoutines } from './';
import { Routes, Route } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../utils/localStorage';

const Main = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(getTokenFromLocalStorage());
  }, []);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div id="main">
      <Navbar setToken={setToken} token={token} />
      <Routes>
        <Route
          path="/users/register"
          element={<Register setToken={setToken} />}
        />
        <Route path="/users/login" element={<Login setToken={setToken} />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/my-routines" element={<MyRoutines token={token} />} />
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
};

export default Main;
