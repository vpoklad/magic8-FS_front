import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputTable from '../InputTable/InputTable';
import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css';

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
  const [typeOfTransaction, setTypeOfTransaction] = useState(false);

  const clickExpense = () => {
    if (expense) return;
    setIncome(false);
    setExpense(true);
    setTypeOfTransaction(false);
  };

  const clickIncome = () => {
    if (income) return;
    setIncome(true);
    setExpense(false);
    setTypeOfTransaction(true);
  };

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
          <InputTable
            options={[categoryExpense, typeOfTransaction]}
            typeOfTransaction={false}
          />
          <div>
            <TransactionTable></TransactionTable>
          </div>
        </div>
      ) : (
        <div className={s.counterContainer}>
          <InputTable
            options={[categoryIncome, typeOfTransaction]}
            typeOfTransaction={true}
          />
          <div>
            <TransactionTable></TransactionTable>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountingTable;
