import './Collection.css';
import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

import { getUsercardsById } from '../../utils/connection';

const Profile = ({ theme, user }) => {
  const [usercards, setUsercards] = useState([]);

  useEffect(() => {
    const makeAsync = async () => {
      const { data } = await getUsercardsById(user.user_id);
      setUsercards(data.data);
    };
    makeAsync();
  }, [user.user_id]);

  return (
    <section className={`collection collection-${theme}`}>
      <div className={`collection-cards collection-cards-${theme}`}>
        {usercards.length === 0 && <h1>YOUR COLLECTION IS EMPTY</h1>}
        {usercards.map((usercard) => {
          return (
            <Tilt key={`${usercard.card_id}${usercard.issue}`}>
              <img className={`collection-card`} src={usercard.image_url} alt="card" />
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
