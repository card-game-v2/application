import './Profile.css';
import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

const Profile = ({ theme, user }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  if (loading) return <Loading theme={theme} />;

  return (
    <section className={`profile profile-${theme}`}>
      <div className={`profile-userinfo profile-userinfo-${theme}`}>
        <img className={`profile-avatar`} src={`${user.avatar_url}`} alt="Profile Icon" />
        <div>
          <h1 className={`profile-name`}>{`${user.username[0].toUpperCase()}${user.username.slice(1)}`}</h1>
          <h4 className={`profile-id`}>{user.user_id}</h4>
        </div>
      </div>
      <div className={`profile-statistics profile-statistics-${theme}`}>
        <h4>${user.currency}</h4>
        <h4>{new Date(user.join_date).toLocaleDateString()}</h4>
      </div>
    </section>
  );
};

export default Profile;
