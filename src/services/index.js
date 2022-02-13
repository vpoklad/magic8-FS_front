import axios from 'axios';

// const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com/';
const BASE_USER_URL = 'http://localhost:5000/';

axios.defaults.baseURL = BASE_USER_URL;

const getBalanceEndpoint = '/api/users/balance';
const addBalanceEndpoint = '/api/users/balance';

export const addBalance = balance => {
  return axios.patch(addBalanceEndpoint, { balance });
};

export const getBalance = () => {
  return axios.get(getBalanceEndpoint);
};
