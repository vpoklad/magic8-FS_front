import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const tablet = useMediaQuery('(min-width:768px)');

  return (
    <div className={s.header__menu}>
      <div className={s.header__avatar}>M</div>
      {tablet && <>
        <span className={s.header__username}>OlyaTsyhanenko</span>
        <div className={s.header__divider}></div>
      </>}
      <button
        className={s.header__logout}
        type="button"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        {tablet ? 'Вихід' : < LogoutOutlinedIcon className={s.logout__icon} />}
      </button>
    </div>
  );
}

