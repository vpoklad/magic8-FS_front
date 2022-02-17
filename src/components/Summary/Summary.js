import s from './Summary.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { summaryThunk } from '../../redux/summary/thunk';
import { getSummary } from '../../redux/summary/selectors';

export default function Summary({ aspect }) {
  const dispatch = useDispatch();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const params = { year: year, month: month };

  const summary = useSelector(getSummary);

  const items = aspect ? 'expense' : 'income';

  const obj = { items, params };
  const sum = summary === null || summary.length === 0;
  useEffect(() => {
    dispatch(summaryThunk(obj));
  }, [items, dispatch]);
  console.log(summary);
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Зведення</p>
      <ul className={s.list}>
        {sum ? (
          <p className={s.noContent}>Даних для зведення немає</p>
        ) : (
          summary.map(item => (
            <li className={s.item} key={`${item._id}`}>
              <span className={s.fieldMonth}>{item.month}</span>
              <span className={s.fieldSumm}>
                {item.totalExpense || item.totalIncome}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
