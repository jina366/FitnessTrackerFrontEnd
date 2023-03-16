import React from 'react';
import { NavbarUser } from './';

const Navbar = ({ setToken }) => {
  return (
    <div id="navbar">
      <div id="navbarLogo">Logo</div>
      <div id="navbarTabs">Tabs</div>
      <div id="navbarUser">
        <NavbarUser setToken={setToken} />
      </div>
    </div>
  );
};

export default Navbar;
