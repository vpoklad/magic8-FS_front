import s from './Summary.module.css';

import { useCallback } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { summaryThunk } from '../../redux/summary/thunk';
import { summarySelectors } from '../../redux/summary/selectors';

export default function Summary({ profits }) {
  const dispatch = useDispatch();

  const expense = useSelector(summarySelectors.getExpenseBySixMonth);
  const income = useSelector(summarySelectors.getIncomeBySixMonth);

  const items = profits ? income : expense;

  const getIncome = useCallback(() => {
    dispatch(summaryThunk.getIncomeByMonth());
  }, [dispatch]);

  const getExpense = useCallback(() => {
    dispatch(summaryThunk.getExpenseByMonth());
  }, [dispatch]);

  useEffect(() => {
    if (profits) {
      getIncome();
    }
    if (!profits) {
      getExpense();
    }
  }, [getIncome, getExpense, profits]);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Зведення</p>
      <ul className={s.list}>
        {items.length > 0 &&
          items.map(item => (
            <li className={s.item} key={`${item.id}`}>
              <span className={s.fieldMonth}>{item.month.toUpperCase()}</span>
              <span className={s.fieldSumm}>{Number(item.total)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
