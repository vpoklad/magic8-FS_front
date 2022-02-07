import { React, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from 'react-router-dom';
import { register, logIn } from '../../redux/auth/thunks';
import { getFormError, getVerify } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css';
import s from './authform.module.css';
import logo from './google.svg';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const formError = useSelector(getFormError);
  const verifyEmailSend = useSelector(getVerify);

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
    e.preventDefault();
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
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

          {formError && <div className={[s.authForm__message, s.authForm__message_danger].join(' ')}>{formError.message}</div>}
          {verifyEmailSend && <div className={[s.authForm__message, s.authForm__message_success].join(' ')}>Лист підветдження відравлено на вказану електронну адресу.</div>}

          <div className={s.btns}>
            <Button
              type="submit"
              title="Ввійти"
              className={sBtn.Button}
              text="ВВІЙТИ"
            >
              {/* ВВІЙТИ */}
            </Button>
            <Button
              type="button"
              onClick={handleRegister}
              title="Реєстрація"
              className={sBtn.Button}
              text="РЕЄСТРАЦІЯ"
            ></Button>

            {/* <button
              type="submit"
              title="Ввійти"
              className={(s.authBtn, s.activeBtn)}
            >
              ВВІЙТИ
            </button> */}
            {/* <button
              type="button"
              onClick={handleRegister}
              title="Реєстрація"
              className={s.authBtn}
            >
              РЕЄСТРАЦІЯ
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
