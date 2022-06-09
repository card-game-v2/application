import './Collection.css';
import React from 'react';

const Profile = ({ theme }) => {
  return (
    <section className={`collection collection-${theme}`}>
      <div className={`collection-cards collection-cards-${theme}`}></div>
    </section>
  );
};

export default Profile;
