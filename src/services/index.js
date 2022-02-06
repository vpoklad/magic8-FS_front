import axios from 'axios';

const BASE_USER_URL = `https://kapusta-magic8.herokuapp.com/`;

axios.defaults.baseURL = BASE_USER_URL;

const addBalanceEndpoint = '/balance';

export const addBalance = balance => {
  return axios.post(`${addBalanceEndpoint}?balance=${balance}`);
};
