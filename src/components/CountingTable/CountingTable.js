import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputTable from '../InputTable/InputTable';
import { toast } from 'react-toastify';
import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css';

import Summary from '../Summary/Summary';
import { getTransactionsThunk } from '../../redux/transactions/thunk';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';
import TransactionMobileTable from '../TransactionTable/Mobile/TransactionTableMobile';
import InputModal from '../InputModal/InputModal';

const categoryExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'foods', label: 'Продукти' },
  { value: 'health', label: "Здоров'я" },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Розваги' },
  { value: 'technics', label: 'Техніка' },
  { value: 'bills', label: "Комуналка, зв'язок" },
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

  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

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



  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, []);

  const transactions  = useSelector(getTransactions);
  const aspect = expense ? true : false;

  const toShowModalExpense = () => {
    setShowModalExpense(true);
  };

  const toShowModalIncome = () => {
    setShowModalIncome(true);
  };

  const onClickModal = () => {
    setShowModalExpense(false);
    setShowModalIncome(false);
  };

  return (
    <div className={s.counterWrapper}>
      {!tablet ? (
        <div className={s.mobileBtn}>
          <button className={s.mobileCounterBtn} onClick={toShowModalExpense}>
            Витрати
          </button>
          <button className={s.mobileCounterBtn} onClick={toShowModalIncome}>
            Дохід
          </button>
        </div>
      ) : (
        <div className={s.tabletBtn}>
          <button
            className={expense ? s['counterAccentBtn'] : s['counterTabletBtn']}
            onClick={clickExpense}
          >
            Витрати
          </button>
          <button
            className={income ? s['counterAccentBtn'] : s['counterTabletBtn']}
            onClick={clickIncome}
          >
            Дохід
          </button>
        </div>
      )}

      {expense ? (
        <div className={s.counterContainer}>
          <InputTable options={categoryExpense} />
          <div className={s.flexContainer}>
            {!transactions ? (
              ''
            ) : (
              <TransactionTable
                transactions={transactions.filter(
                  point => !point.typeOfTransaction,
                )}
              />
            )}
            {tablet && <Summary aspect={aspect} />}
          </div>
        </div>
      ) : (
        <div className={s.counterContainer}>
          <InputTable options={categoryIncome} income={income} />
          <div className={s.flexContainer}>
            {!transactions ? (
              ''
            ) : (
              <TransactionTable
                transactions={transactions.filter(
                  point => point.typeOfTransaction,
                )}
                income={income}
              />
            )}
            {tablet && <Summary aspect={aspect} />}
          </div>
        </div>
      )}
      {!tablet && <TransactionMobileTable transactions={transactions} />}
      {showModalIncome && !tablet && (
        <InputModal text="Дохід" closeInputModal={onClickModal}>
          <InputTable
            options={categoryIncome}
            income={income}
            onClick={onClickModal}
          />
        </InputModal>
      )}
      {showModalExpense && !tablet && (
        <InputModal text="Витрата" closeInputModal={onClickModal}>
          <InputTable options={categoryExpense} onClick={onClickModal} />
        </InputModal>
      )}
    </div>
  );
};

export default CountingTable;
