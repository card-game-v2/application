const axios = require('axios');

const server = axios.create({
  baseURL: 'http://localhost:9000',
});

export const getUserByUsername = async (userName) => {
  const { data } = await server.get(`/username/${userName}`);
  return data;
};

export const getUserById = async (userId) => {
  const { data } = await server.get(`/userid/${userId}`);
  return data;
};

export const postUser = async (userID, userName, userPassword, userAvatarURL) => {
  const { data } = await server.post('/user', {
    user_id: userID,
    user_name: userName,
    user_password: userPassword,
    user_avatar_url: userAvatarURL,
  });
  return data;
};
