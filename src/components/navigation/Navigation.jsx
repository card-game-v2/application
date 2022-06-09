import './Navigation.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const { pathname } = useLocation();

  const checkActive = () => {
    return pathname === '/login' || pathname === '/create' ? 'none' : null;
  };

  return (
    <nav style={{ display: checkActive() }} className={`navigation navigation-${theme}`}>
      <div className={`navigation-logo`}>Application Logo</div>
      <input className={`navigation-input input-${theme}`} placeholder="Search..." type="text" />
      <Link to="/profile">
        <button className={`navigation-btn navigation-btn-${theme}`}>PROFILE</button>
      </Link>
      <button
        className={`navigation-btn navigation-btn-${theme}`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        TESTING - THEME
      </button>
      <button className={`navigation-btn navigation-btn-${theme}`} onClick={() => {}}>
        TESTING - SPAWN CARD
      </button>
    </nav>
  );
};

export default Navbar;
