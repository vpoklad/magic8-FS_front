import { createAction } from '@reduxjs/toolkit'


const incomeRequest = createAction('transactions/incomeRequest');
const incomeError = createAction('transactions/incomeError');
const incomeSucces = createAction('transactions/incomeSucces');

const expenseRequest = createAction('transactions/expenseRequest');
const expenseError = createAction('transactions/expenseError');
const expenseSucces = createAction('transactions/expenseSucces');


const getIncomeByDateRequest = createAction('/transactions/getIncomeByDateRequest');
const getIncomeByDateSucces = createAction('/transactions/getIncomeByDateSucces');
const getIncomeByDateError = createAction('/transactions/getIncomeByDateError');


const getExpenseByDateRequest = createAction('/transactions/getExpenseByDateRequest');
const getExpenseByDateSucces = createAction('/transactions/getExpenseByDateSucces');
const getExpenseByDateError = createAction('/transactions/getExpenseByDateError');

const deleteTransactionRequest = createAction('transactions/deleteRequest');
const deleteTransactionSuccess = createAction('transactions/deleteSuccess');
const deleteTransactionError = createAction('transactions/deleteError');


const transactionsActions = {
    incomeRequest,
    incomeError,
    incomeSucces,
    expenseError,
    expenseRequest,
    expenseSucces,
    getExpenseByDateError,
    getExpenseByDateRequest,
    getExpenseByDateSucces,
    getIncomeByDateError,
    getIncomeByDateRequest,
    getIncomeByDateSucces,
    deleteTransactionRequest,
    deleteTransactionSuccess,
    deleteTransactionError
}




export default transactionsActions 
