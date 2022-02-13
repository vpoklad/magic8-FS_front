import axios from 'axios'
import transactionsActions from './transactionsActions'

const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com'

axios.defaults.baseURL = BASE_USER_URL

const addIncome = (params, onSucces, onError) => async dispatch => {
    dispatch(transactionsActions.incomeRequest())

    try {
        await axios.post('/api/transactions', params);
        dispatch(transactionsActions.incomeSucces);
        onSucces();
    } catch (error) {
        onError(error);
        dispatch(transactionsActions.incomeError(error.message))
    };
};


const addExpense = (params, onSucces, onError) => async dispatch => {
    dispatch(transactionsActions.expenseRequest())

    try {
        await axios.post('/api/transactions', params);
        dispatch(transactionsActions.expenseSucces);
        onSucces();
    } catch (error) {
        onError(error);
        dispatch(transactionsActions.expenseError(error.message))
    };
};

const getIncome = (onSucces, onError) => async dispatch => {
    dispatch(transactionsActions.getExpenseByDateRequest);
     try {
    const { data } = await axios.get(
      `/api/v1/transactions/getTransaction`,
    );
    dispatch(transactionsActions.getIncomeByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeByDateError(error));
  }
};

const deleteTransaction = (id, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/api/transactions/${id}`);
    dispatch(transactionsActions.deleteTransactionSuccess());
    onSuccess();
  } catch (error) {
    onError(error);
    dispatch(transactionsActions.deleteTransactionError(error));
  }
};


const transactionsOperations = {
    addExpense,
    addIncome,
    deleteTransaction,
    getIncome
}

export default transactionsOperations