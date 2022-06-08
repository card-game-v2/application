import './Profile.css';
import React from 'react';

const Profile = ({ theme }) => {
  return (
    <section className={`profile profile-${theme}`}>
      <div className={`profile-userinfo profile-userinfo-${theme}`}>
        <img
          className={`profile-avatar`}
          src="https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png"
          alt="Profile Icon"
        />
        <div>
          <h1 className={`profile-name`}>Username</h1>
          <h4 className={`profile-id`}>1938573925837508</h4>
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
