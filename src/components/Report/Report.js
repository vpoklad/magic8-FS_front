import s from './Report.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../sprite.svg';

export default function Report() {
  return (
    <div className={s.reports}>
      <Link to="/reports" className={s.link}>
        Перейти до звітів
      </Link>
      <svg width="24" height="24" className={s.icon}>
        <use href={`${sprite}#icon-barchart`} />
      </svg>
    </div>
  );
}
