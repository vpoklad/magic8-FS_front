import s from './Summary.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { summaryThunk } from '../../redux/summary/thunk';
import { getSummary } from '../../redux/summary/selectors';

export default function Summary({ aspect }) {
  const dispatch = useDispatch();

  const summary = useSelector(getSummary);

  const items = aspect ? 'expense' : 'income';

  useEffect(() => {
    dispatch(summaryThunk(items));
  }, [items]);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Зведення</p>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.fieldMonth}>ноябрь</span>
          <span className={s.fieldSumm}>2.500</span>
        </li>
        <li className={s.item}>
          <span className={s.fieldMonth}>октябрь</span>
          <span className={s.fieldSumm}>10.000</span>
        </li>{' '}
        <li className={s.item}>
          <span className={s.fieldMonth}>сентябрь</span>
          <span className={s.fieldSumm}>10.000</span>
        </li>{' '}
        <li className={s.item}>
          <span className={s.fieldMonth}>Август</span>
          <span className={s.fieldSumm}>10.000</span>
        </li>{' '}
        <li className={s.item}>
          <span className={s.fieldMonth}>Июль</span>
          <span className={s.fieldSumm}>10.000</span>
        </li>{' '}
        <li className={s.item}>
          <span className={s.fieldMonth}>июнь</span>
          <span className={s.fieldSumm}>10.000</span>
        </li>
        {/* {summary.length > 0 &&
          summary.map(item => (
            <li className={s.item} key={`${item.id}`}>
              <span className={s.fieldMonth}>{item.month}</span>
              <span className={s.fieldSumm}>{item.sum}</span>
            </li>
          ))} */}
      </ul>
    </div>
  );
}
