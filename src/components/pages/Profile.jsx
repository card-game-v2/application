import './Profile.css';
import React from 'react';

const Profile = ({ theme, user }) => {
  return (
    <section className={`profile profile-${theme}`}>
      <div className={`profile-userinfo profile-userinfo-${theme}`}>
        <img className={`profile-avatar`} src={`${user.avatar}`} alt="Profile Icon" />
        <div>
          <h1 className={`profile-name`}>{`${user.username[0].toUpperCase()}${user.username.slice(1)}`}</h1>
          <h4 className={`profile-id`}>{user.userid}</h4>
        </div>
      </div>
      <div className={`profile-statistics profile-statistics-${theme}`}>
        <h4>Statistic</h4>
        <h4>Statistic</h4>
        <h4>Statistic</h4>
      </div>
    </section>
  );
};

export default Profile;
