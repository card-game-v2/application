const axios = require('axios');

const server = axios.create({
  baseURL: 'http://localhost:9000',
});

export const getUserByUsername = async (user_name) => {
  const { data } = await server.get(`/users/u/${user_name}`);
  return data;
};

export const getUserById = async (user_id) => {
  const { data } = await server.get(`/users/i/${user_id}`);
  return data;
};

export const postUser = async (user_id, user_name, user_password, user_avatar_url) => {
  const { data } = await server.post('/users', { user_id, user_name, user_password, user_avatar_url });
  return data;
};
