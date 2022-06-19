import './Collection.css';
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Loading from '../loading/Loading';

import { getUsercardsById } from '../../utils/connection';

const Collection = ({ theme, user }) => {
  const [loading, setLoading] = useState(true);
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [usercards, setUsercards] = useState([]);
  const [isFlipped, setIsFlipped] = useState({});

  useEffect(() => {
    const makeAsync = async () => {
      const { data } = await getUsercardsById(user.user_id);
      setUsercards(data.data);
      setLoading(false);
    };
    makeAsync();
  }, [user.user_id]);

  const handleClick = (id) => {
    setIsFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  };

  if (loading) return <Loading theme={theme} />;

  return (
    <section className={`collection collection-${theme}`}>
      <h1 className={`collection-title`}>COLLECTION</h1>
      <hr className={`collection-hr collection-hr-${theme}`} />
      <div className={`collection-cards`}>
        {usercards.length === 0 && <h1>YOUR COLLECTION IS EMPTY</h1>}
        {usercards.map((usercard) => {
          return (
            <ReactCardFlip
              isFlipped={isFlipped[usercard.usercard_id]}
              flipDirection="horizontal"
              key={`${usercard.usercard_id}+${usercard.issue}`}
            >
              <button className={`collection-button`} onClick={() => handleClick(usercard.usercard_id)}>
                <img
                  className={`collection-card collection-card-${theme}`}
                  src={usercard.image_url}
                  alt="card"
                  onLoad={() => setLoadedImageCount(loadedImageCount + 1)}
                />
              </button>
              <button className={`collection-button`} onClick={() => handleClick(usercard.usercard_id)}>
                <div className={`collection-card collection-card-${theme}`}>
                  <p>{usercard.group}</p>
                  <p>{usercard.name}</p>
                  <p>#{usercard.issue}</p>
                  <p>R{usercard.rank}</p>
                  <p>X{usercard.xp}</p>
                </div>
              </button>
            </ReactCardFlip>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
