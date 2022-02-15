import axios from 'axios';

const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com/';
// const BASE_USER_URL = 'http://localhost:5000/';

axios.defaults.baseURL = BASE_USER_URL;

const getBalanceEndpoint = '/api/users/balance';
const addBalanceEndpoint = '/api/users/balance';
const getTransactionsEndpoint = '/api/transactions';
const delTransactionEndpoint = '/api/transactions/:id';

export const addBalance = balance => {
  return axios.patch(addBalanceEndpoint, { balance });
};

export const getBalance = () => {
  return axios.get(getBalanceEndpoint);
};

export const addTransaction = transaction => {
  return axios.post(getTransactionsEndpoint, transaction);
};

export const getTransactions = () => {
  return axios.get(getTransactionsEndpoint);
};

export const delTransaction = id => {
  return axios.delete(delTransactionEndpoint, id );
};

export const getSummary = aspect => {
  return axios.get(`/api/stats/${aspect}`);
};
