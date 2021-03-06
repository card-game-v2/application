import './Store.css';
import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

import { getFiveCards, postUsercards, incrementCardIssue } from '../../utils/connection';

const Store = ({ theme, user }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handlePackOpen = async () => {
    const { data } = await getFiveCards();
    for (const card of data.data) {
      await incrementCardIssue(card.card_id);
      await postUsercards(user.user_id, card.card_id, card.issue_count + 1, 'A', 0);
    }
  };

  if (loading) return <Loading theme={theme} />;

  return (
    <section className={`store store-${theme}`}>
      <h1 className={`store-title`}>STORE</h1>
      <hr className={`store-hr store-hr-${theme}`} />
      <button onClick={() => handlePackOpen()}>PACK 1</button>
    </section>
  );
};

export default Store;
