import { React, useState } from 'react';
import { useDispatch } from "react-redux";
import GoogleAuthBtn from '../GoogleLogin/GoogleAuthBtn';
import { register, logIn } from '../../redux/auth/thunks';
import s from './authform.module.css';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    dispatch(logIn({email, password}));
    setEmail('');
    setPassword('');
  };
  const handleRegister = e => {
    e.preventDefault();
    dispatch(register({email, password}));
    setEmail('');
    setPassword('');
  }

  return (
    <div className={s.authformContainter}>
      <div className={s.container_content}>
        <p className={s.authformInfo_header}>
          Ви можете авторизуватися за допомогою Google Account:
        </p>
        <div className={s.googleBtn}>
          <GoogleAuthBtn />
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
          <div className={s.btns}>
            <button
              type="submit"
              title="Ввійти"
              className={(s.authBtn, s.activeBtn)}
            >
              ВВІЙТИ
            </button>
            <button type="button"
              onClick={handleRegister}
              title="Реєстрація"
              className={s.authBtn}>
              РЕЄСТРАЦІЯ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
