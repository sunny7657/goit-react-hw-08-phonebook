import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signupRequest = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token); //after this line we already have token in instance  and there is no need to save it again
  return data;
};

export const loginRequest = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};
