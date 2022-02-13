import s from './Report.module.css';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { getReportThunk } from '../../redux/reports/thunk';

import sprite from '../../sprite.svg';

export default function Report() {
  const dispatch = useDispatch();

  const getReport = () => {
    // const value = { year: 2022, month: 1 };
    const year = 2022;
    const month = 5;
    const params = { year: year, month: month };
    dispatch(getReportThunk(params));
  };
  return (
    <div className={s.reports} onClick={getReport}>
      <Link to="/reports" className={s.link}>
        Перейти до звітів
      </Link>
      <svg width="24" height="24" className={s.icon}>
        <use href={`${sprite}#icon-barchart`} />
      </svg>
    </div>
  );
}
