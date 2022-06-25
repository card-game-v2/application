import './Profile.css';
import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

const Profile = ({ theme, user }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Loading theme={theme} />;

  return (
    <section className={`profile profile-${theme}`}>
      <h1 className={`profile-title`}>PROFILE</h1>
      <hr className={`profile-hr profile-hr-${theme}`} />
      <div className={`profile-information`}>
        <div className={`profile-userinfo`}>
          <img className={`profile-avatar`} src={user.avatar_url} alt="Profile Icon" />
          <div>
            <h1 className={`profile-username`}>{`${user.username[0].toUpperCase()}${user.username.slice(1)}`}</h1>
            <h4 className={`profile-userid`}>{user.user_id}</h4>
          </div>
        </div>
        <div className={`profile-statistics`}>
          <p style={{ margin: '0px 0px 10px 0px' }}>Joined: 00/00/00</p>
          <p style={{ margin: '0px 0px 10px 0px' }}>Cards: 1000</p>
          <p style={{ margin: '0px 0px 10px 0px' }}>Trades: 1000</p>
          <p style={{ margin: '0px 0px 00px 0px' }}>Achievements: 00/00</p>
        </div>
      </div>
      <hr className={`profile-hr profile-hr-${theme}`} />
    </section>
  );
};

export default Profile;
