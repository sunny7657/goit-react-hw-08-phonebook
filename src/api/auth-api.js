import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupRequest = async body => {
  const { data } = await instance.post('/users/signup', body);
  console.log(data);
  return data;
};
