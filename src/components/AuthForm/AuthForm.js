import { React, useState } from 'react';

import { useDispatch, useSelector  } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

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

  const clientId = process.env.GOOGLE_CLIENT_ID;

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = res => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = res => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

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

          {showloginButton ? (
            <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={s.googleBtn}
                >
                  <img src={logo} alt="google" className={s.googleIcon} />
                  Google
                </button>
              )}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          ) : null}

          {showlogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={s.googleBtn}
                >
                  <img src={logo} alt="google" className={s.googleIcon} />
                  Log out
                </button>
              )}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}

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
              placeholder="Ваш пароль"
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
