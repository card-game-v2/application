const axios = require('axios');

const server = axios.create({
  baseURL: 'http://192.168.0.10:9000',
});

export const getUserByUsername = async (username) => {
  return await server.get(`/users/username/${username}`);
};

export const getUserById = async (user_id) => {
  return await server.get(`/users/id/${user_id}`);
};

export const postUser = async (user_id, username, password, avatar_url, join_date, currency) => {
  return await server.post('/users', { user_id, username, password, avatar_url, join_date, currency });
};

export const getUsercardsById = async (user_id) => {
  return await server.get(`/usercards/${user_id}`);
};

export const getFiveCards = async () => {
  return await server.get('/cards/pack');
};

export const postUsercards = async (user_id, card_id, usercards_issue, usercards_rank, usercards_xp) => {
  return await server.post('/usercards', { user_id, card_id, usercards_issue, usercards_rank, usercards_xp });
};

export const incrementCardIssue = async (card_id) => {
  return await server.patch(`/cards/issue/${card_id}`);
};
