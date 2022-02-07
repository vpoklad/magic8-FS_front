import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redux/auth/thunks';
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css';
import s from './authform.module.css';
import logo from './google.svg';

export default function AuthForm() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.gapi.load([
  //     'auth2',
  //     function () {
  //       window.gapi.auth2
  //         .init({
  //           client_id: process.env.GOOGLE_CLIENT_ID,
  //         })
  //         .then(
  //           () => console.log('init OK'),
  //           () => console.log('init Error'),
  //         );
  //     },
  //   ]);
  // }, []);

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
    console.log('key pressed');
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
          <NavLink to="/" exact="true" className={s.googleLink}>
            <button className={s.googleBtn}>
              <img src={logo} alt="google" className={s.googleIcon} />
              Google
            </button>
          </NavLink>
        </div>

        <p className={s.authformInfo}>
          Або зайти за допомогою e-mail та пароля, попередньо пройшовши
          реєстрацію.
        </p>
        <form onSubmit={handlelogIn} className={s.authform} autoComplete="off">
          <label className={s.authLabel}>
            Електронна пошта:
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
              placeholder="password"
              required
              className={s.authInput}
              value={password}
              onChange={handleChange}
            />
          </label>
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
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
