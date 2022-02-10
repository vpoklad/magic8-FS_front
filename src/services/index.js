import axios from 'axios';

const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com/';

axios.defaults.baseURL = BASE_USER_URL;

const addBalanceEndpoint = '/api/users/balance';

export const addBalance = balance => {
  return axios.patch(addBalanceEndpoint, { balance });
};