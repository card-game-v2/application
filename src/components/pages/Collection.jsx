import './Collection.css';
import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Loading from '../loading/Loading';

import { getUsercardsById } from '../../utils/connection';

const Profile = ({ theme, user }) => {
  const [loading, setLoading] = useState(true);
  const [usercards, setUsercards] = useState([]);

  useEffect(() => {
    const makeAsync = async () => {
      const { data } = await getUsercardsById(user.user_id);
      setUsercards(data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1400);
    };
    makeAsync();
  }, [user.user_id]);

  if (loading) return <Loading theme={theme} />;

  return (
    <section className={`collection collection-${theme}`}>
      <div className={`collection-cards collection-cards-${theme}`}>
        {usercards.length === 0 && <h1>YOUR COLLECTION IS EMPTY</h1>}
        {usercards.map((usercard) => {
          return (
            <Tilt className={`collection-tilt`} key={`${usercard.card_id}${usercard.issue}`}>
              <img className={`collection-card`} src={usercard.image_url} alt="card" />
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
