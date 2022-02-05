import s from "./UserMenu.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
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
      <Avatar alt='name' className={s.header__avatar}>{user.name} </Avatar>
      {tablet &&
        <>
          <Typography className={s.header__username} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user.name} </Typography>
        </>
      }
        <Button
        className={s.header__logout}
        type="button"
        variant="none"
        onClick={handleLogout}
        size="small"
        color="grey"
        >
          {tablet ? 'Вихід' : <LogoutIcon className={s.logout__icon}/> }
        </Button>
    </div>
  );
}
