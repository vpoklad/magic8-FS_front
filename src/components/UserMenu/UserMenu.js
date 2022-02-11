import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../sprite.svg';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/thunks';
import { useToggle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';

export default function UserMenu() {
  const tablet = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const userName = user.substring(0, user.lastIndexOf('@'));
  const userNameFirstLetter = user[0];

  const [showModal, setShowModal] = useToggle(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onClickConfirm = () => {
    dispatch(logout());
  };

  return (
    <div className={s.header_menu}>
      <div className={s.header_avatar}>{userNameFirstLetter}</div>
      {tablet && <>
        <span className={s.header_username}>{userName}</span>
        <div className={s.header_divider}></div>
      </>}
        <button
          className={s.header_logout}
          type="button"
          onClick={toggleModal}>
          {tablet
            ? <p className={s.logout_name}>Вихід</p>
            : <svg width="16" height="16"><use href={`${sprite}#icon-logout`}></use></svg>
          }
        </button>
        {showModal && ( <Modal submitModal={onClickConfirm} toggleModal={setShowModal} text="Ви дійсно хочете вийти?"/>) }

    </div>
  );
}
