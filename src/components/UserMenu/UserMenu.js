import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../sprite.svg';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/thunks';
import { useToggle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';
import Button from "../Button/Button";

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
    <div className={s.header__menu}>
      <div className={s.header__avatar}>{userNameFirstLetter}</div>
      {tablet && (
        <>
          <span className={s.header__username}>{userName}</span>
          <div className={s.header__divider}></div>
        </>
      )}
      <button className={s.header__logout} type="button" onClick={toggleModal}>
        {tablet ? (
          'Вихід'
        ) : (
          <svg width="16" height="16">
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
        )}
      </button>
      {showModal && (
        <Modal
          toggleModal={setShowModal}
          text="Ви дійсно хочете вийти?">
          <Button type="submit" text="так" onClick={onClickConfirm}/>
          <Button type="button" text="ні" onClick={setShowModal}/>
        </Modal>
      )}
    </div>
  );
}
