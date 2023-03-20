import React from 'react';
import { saveToLocalStorage } from '../utils/localStorage';

function NavbarUser({ setToken }) {
  return (
    <div className="navbar-user" id="navbar-user-container">
      <button
        onClick={() => {
          setToken('');
          saveToLocalStorage('');
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default NavbarUser;
