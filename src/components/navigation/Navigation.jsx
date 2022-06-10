import './Navigation.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ theme, setTheme, user }) => {
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
      <Link to="/collection">
        <button className={`navigation-btn navigation-btn-${theme}`}>COLLECTION</button>
      </Link>
      <button
        className={`navigation-btn navigation-btn-${theme}`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        TESTING - THEME
      </button>
      <div className={`settings settings-${theme}`}>
        <img className={`settings-img`} src={user?.avatar_url} alt="" />
        <div className={`settings-info`}>
          <div className={`settings-name`}>{`${user?.username[0].toUpperCase()}${user?.username.slice(1)}`}</div>
          <div className={`settings-id`}>{user?.user_id}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
