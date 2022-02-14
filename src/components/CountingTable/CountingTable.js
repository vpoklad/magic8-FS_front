import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputTable from '../InputTable/InputTable';
import { toast } from 'react-toastify';
import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css';
import transactionsOperations from '../../redux/transactions/transactionsApi';
import transactionsSelectors from '../../redux/transactions/transactionsSelectors';
import { getBalance } from '../../redux/balance/selectors';
import Summary from '../Summary/Summary';

const categoryExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'foods', label: 'Продукти' },
  { value: 'health', label: "Здоров'я" },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Розваги' },
  { value: 'technics', label: 'Техніка' },
  { value: 'bills', label: "Комунальні платежі, зв'язок" },
  { value: 'houseGoods', label: 'Все для дому' },
  { value: 'hobby', label: 'Спорт, хобі' },
  { value: 'education', label: 'Освіта' },
  { value: 'other', label: 'Інше' },
];

const categoryIncome = [
  { value: 'salary', label: 'ЗП' },
  { value: 'addIncome', label: 'Дод. дох' },
];

const CountingTable = () => {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(false);
  const transactions = 0;

  const tablet = useMediaQuery('(min-width: 768px)');

  const clickExpense = () => {
    if (expense) return;
    setIncome(false);
    setExpense(true);
  };

  const onError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  const clickIncome = () => {
    if (income) return;
    setIncome(true);
    setExpense(false);
  };

  const onSuccess = () => {
    toast.succes('Transaction added');
    dispatch(getBalance());
    if (income) {
      dispatch(transactionsOperations.getIncomeByDate());
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate());
    }
  };

  const handleSubmit = params => {
    if (income) {
      dispatch(transactionsOperations.addIncome(params, onSuccess, onError));
    }
    if (expense) {
      dispatch(transactionsOperations.addExpense(params, onSuccess, onError));
    }
  };

  const onDeleteTransaction = id => {
    dispatch(
      transactionsOperations.deleteTransaction(
        id,
        onDeleteTransactionSuccess,
        onDeleteTransactionError,
      ),
    );
  };

  const onDeleteTransactionSuccess = () => {
    toast.success('Transaction has been deleted.');
    dispatch(getBalance());
    if (income) {
      dispatch(transactionsOperations.getIncomeByDate());
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate());
    }
  };

  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  const aspect = expense ? true : false;

  return (
    <div className={s.counterWrapper}>
      <div className={s.mobileBtn}>
        <button
          className={expense ? s['counterAccentBtn'] : s['counterBtn']}
          onClick={clickExpense}
        >
          Витрати
        </button>
        <button
          className={income ? s['counterAccentBtn'] : s['counterBtn']}
          onClick={clickIncome}
        >
          Дохід
        </button>
      </div>

      {expense ? (
        <div className={s.counterContainer}>
          <InputTable options={categoryExpense} onSubmit={handleSubmit} />
          <div className={s.flexContainer}>
            <TransactionTable
              transactions={transactions}
              onDelete={onDeleteTransaction}
            />
            {tablet && <Summary aspect={aspect} />}
          </div>
        </div>
      ) : (
        <div className={s.counterContainer}>
          <InputTable
            options={categoryIncome}
            income={income}
            onSubmit={handleSubmit}
          />
          <div className={s.flexContainer}>
            <TransactionTable
              transactions={transactions}
              income={income}
              onDelete={onDeleteTransaction}
            />
            {tablet && <Summary aspect={aspect} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountingTable;
