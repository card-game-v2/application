import './Collection.css';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

// import { getUsercardsById } from '../../utils/connection';

const Profile = ({ theme, user, spawn }) => {
  const [usercards, setUsercards] = useState([]);

  return (
    <section className={`collection collection-${theme}`}>
      <div className={`collection-cards collection-cards-${theme}`}>
        {usercards.map((usercard) => (
          <Tilt key={`${usercard.usercards_id}${usercard.usercards_issue}`}>
            <img className={`collection-card`} src={usercard.card_image_url} alt="card" />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Profile;
