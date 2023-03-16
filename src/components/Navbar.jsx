import React from 'react';
import { NavbarUser } from './';

const Navbar = ({ setToken, token }) => {
  return (
    <div id="navbar">
      <div id="navbarLogo">Logo</div>
      <div id="navbarTabs">
        <div id="navbarTabs-container">
          <h2>Home</h2>
          <h2>Routines</h2>
          {token ? <h2>My Routines</h2>: null}
          <h2>Activities</h2>
        </div>
      </div>
      <div id="navbarUser">
        <NavbarUser setToken={setToken} />
      </div>
    </div>
  );
};

export default Navbar;
