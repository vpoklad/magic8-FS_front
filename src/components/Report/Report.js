import s from './Report.module.css';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { getReportThunk } from '../../redux/reports/thunk';

import sprite from '../../sprite.svg';

export default function Report() {
  const dispatch = useDispatch();

  const getReport = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
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
