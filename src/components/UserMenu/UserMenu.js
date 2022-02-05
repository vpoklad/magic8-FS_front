import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../sprite.svg';
import s from './UserMenu.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { getName } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/thunks';

export default function UserMenu() {
  const tablet = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const user = useSelector(getName);

  const handleLogout = () => {
    dispatch(logoutThunk())
  }
  
  return (
    <div className={s.header__menu}>
      <div className={s.header__avatar}>H</div>
      {tablet && <>
        <span className={s.header__username}>HelenMarlen</span>
        <div className={s.header__divider}></div>
      </>}
      <button
        className={s.header__logout}
        type="button"
        onClick={handleLogout}
      >
        {tablet
          ? 'Вихід'
          : <svg width="16" height="16"><use href={`${sprite}#icon-logout`}></use></svg>
        }
      </button>
    </div>
  );
}