import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, getVerify } from '../../redux/auth/selectors';
import logo from './logo.svg';

export default function AppBar() {
  const isUser = useSelector(getUser);
  const isGuest = useSelector(getVerify);

  return (
    <header className={s.header}>
      <Link to="/">
        <img className={s.header__logo} src={logo} alt="Kapusta" width="90" />
      </Link>
      {isUser && !isGuest && <UserMenu />}
    </header>
  );
}
