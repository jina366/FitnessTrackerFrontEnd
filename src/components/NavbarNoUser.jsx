import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarNoUser() {
  const navigate = useNavigate();

  return (
    <div className="navbar-user" id="navbar-no-user-container">
      <button
        onClick={() => {
          navigate('/users/login');
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate('/users/register');
        }}
      >
        Register
      </button>
    </div>
  );
}

export default NavbarNoUser;
