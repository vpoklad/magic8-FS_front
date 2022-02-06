import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../sprite.svg';
import s from './UserMenu.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { getName } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/thunks';

export default function UserMenu() {
  const tablet = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const user = {
    email: 'helenMarlen@gmail.com',
  }// useSelector(getName);
  console.log(user);

  const userName = user.email.substring(0, user.email.lastIndexOf("@"));
  const userNameFirstLetter = user.email[0];

  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  return (
    <div className={s.header__menu}>
      <div className={s.header__avatar}>{userNameFirstLetter}</div>
      {tablet && <>
        <span className={s.header__username}>{userName}</span>
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