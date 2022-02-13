import axios from 'axios';
// import { id } from 'date-fns/locale';

const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com/';
// const BASE_USER_URL = 'http://localhost:5000/';

axios.defaults.baseURL = BASE_USER_URL;

const getBalanceEndpoint = '/api/users/balance';
const addBalanceEndpoint = '/api/users/balance';

const addTransactionEndpoint = '/api/transactions';
const getAllTransactionsEndpoint = '/api/transactions';
const delTransactionEndpoint = '/api/transactions/:id';

export const addBalance = balance => {
  return axios.patch(addBalanceEndpoint, { balance });
};

export const addTransaction = transaction => {
  return axios.post(addTransactionEndpoint, transaction);
};

export const getAllTransactions = transactions => {
  return axios.get(getAllTransactionsEndpoint, { transactions });
};

export const delTransaction = id => {
  return axios.delete(delTransactionEndpoint, { id });
};

export const getBalance = () => {
  return axios.get(getBalanceEndpoint);
};
