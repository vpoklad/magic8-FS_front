import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getUser, getVerify } from '../../redux/auth/selectors';
import logo from './logo.svg';

export default function AppBar() {
  const isUser = useSelector(getUser);
  const isGuest = useSelector(getVerify);

  return (
    <header className={s.header}>
      <img className={s.header__logo} src={logo} alt="Kapusta" width="90" />
      {(isUser && !isGuest) && <UserMenu />}
    </header>
  );
}