import './Collection.css';
import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

import { getUsercardsById } from '../../utils/connection';

const Profile = ({ theme, user, spawn }) => {
  const [usercards, setUsercards] = useState([]);

  useEffect(() => {
    const makeAsync = async () => {
      const { data } = await getUsercardsById(user.userid);
      setUsercards(data);
    };
    makeAsync();
  }, [spawn]);

  useEffect(() => {}, [usercards]);

  return (
    <section className={`collection collection-${theme}`}>
      <div className={`collection-cards collection-cards-${theme}`}>
        {usercards.map((usercard) => (
          <Tilt key={usercard.usercard_id}>
            <img className={`collection-card`} src={usercard.card_image_url} alt="card" />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Profile;
