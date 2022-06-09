import { getUserById, postUsercards, incrementCardIssue } from './connection';

export const createID = async () => {
  const array = [];
  for (let i = 0; array.length < 16; i++) {
    const number = Math.floor(Math.random() * 10);
    if (number !== 0) array.push(number);
  }
  const id = parseInt(array.join(''));
  const { message } = await getUserById(id);
  if (message === 'User not found') return id;
  return createID();
};

export const spawnRandomCard = async (user_id, card_id) => {
  const { data } = await incrementCardIssue(card_id);
  console.log(data);
  await postUsercards(user_id, card_id, data.card_issue, 'H', 0);
};
