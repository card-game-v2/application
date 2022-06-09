import { getUserById } from './connection';

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
