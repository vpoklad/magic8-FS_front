import useMediaQuery from '@mui/material/useMediaQuery';
import sprite from '../../sprite.svg';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserAvatar } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/thunks';
import { useToggle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';

export default function UserMenu() {
  const tablet = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const userAvatar = useSelector(getUserAvatar);

  const userName = user.substring(0, user.lastIndexOf('@'));
  const userNameFirstLetter = user[0];

  const [showModal, setShowModal] = useToggle(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onClickConfirm = () => {
    dispatch(logout());
  };
  console.log(userAvatar);
  return (
    <div className={s.header__menu}>
      <div className={s.header__avatar}>
        {userAvatar ? (
          <img
            src={userAvatar}
            className={s.header__avatarImg}
            alt="user avatar"
          />
        ) : (
          { userNameFirstLetter }
        )}
      </div>

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
          submitModal={onClickConfirm}
          toggleModal={setShowModal}
          text="Ви дійсно хочете вийти?"
        />
      )}
    </div>
  );
}
