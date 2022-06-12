import { getUserById } from './connection';
import bcrypt from 'bcryptjs';

export const createUniqueUserID = async () => {
  const array = [];

  for (let i = 0; array.length < 16; i++) {
    const number = Math.floor(Math.random() * 10);
    if (number !== 0) array.push(number);
  }

  const { data } = await getUserById(parseInt(array.join('')));
  if (data.message === 'error') return parseInt(array.join(''));
  return createUniqueUserID();
};

export const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
