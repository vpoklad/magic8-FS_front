import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from '../../redux/auth/thunks';
import { getFormError, getVerifyMessage } from '../../redux/auth/selectors';
import { useToggle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css';
import s from './authform.module.css';
import logo from './google.svg';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const formError = useSelector(getFormError);
  const verifyMessage = useSelector(getVerifyMessage);

  const [showModal, setShowModal] = useToggle(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handlelogIn = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  const handleRegister = e => {
    toggleModal()
    e.preventDefault();
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
  };
  const handleResendEmail = (e) => {
    if (verifyMessage === false )
    return (
      setEmail(''),
      setPassword(''),
      dispatch(register({ email, password }))
    )
    }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={s.authformContainter}>
      <div className={s.container_content}>
        <p className={s.authformInfo_header}>
          Ви можете авторизуватися за допомогою Google Account:
        </p>

        <div>
          <a
            href="https://kapusta-magic8.herokuapp.com/api/users/google"
            className={s.googleLink}
          >
            <div className={s.googleBtn}>
              <img src={logo} alt="google" className={s.googleIcon} />
              Google
            </div>
          </a>
        </div>

        <p className={s.authformInfo}>
          Або зайти за допомогою e-mail та пароля, попередньо пройшовши
          реєстрацію.
        </p>
        <form onSubmit={handlelogIn} className={s.authform} autoComplete="off">
          <label className={s.authLabel}>
            Електронна пошта
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className={s.authInput}
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={s.authLabel}>
            Пароль:
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              required
              className={s.authInput}
              value={password}
              onChange={handleChange}
            />
          </label>

          {formError && (
            <div
              className={[s.authForm__message, s.authForm__message_danger].join(
                ' ',
              )}
            >
              {formError.message}
            </div>
          )}
          {verifyMessage && (
            <div
              className={[
                s.authForm__message,
                s.authForm__message_success,
              ].join(' ')}
            >
              {verifyMessage}
            </div>
          )}

          <div className={s.btns}>
            <Button
              type="submit"
              title="Ввійти"
              className={sBtn.Button}
              text="ВВІЙТИ"
            ></Button>
            <Button
              type="button"
              onClick={handleRegister}
              title="Реєстрація"
              className={sBtn.Button}
              text="РЕЄСТРАЦІЯ"
            > </Button>
            {showModal && (
            <Modal toggleModal={toggleModal}
              text="На вашу електронну скриньку надісланий лист. Для підтвердження реєстрації натисніть посилання в листі.">
              <p className={s.authformInfo_header}>якщо лист не отриманий, натисніть
              <button className={s.info} type="submit" onClick={handleResendEmail}>надіслати ще раз</button>
              </p>
            </Modal>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
