import { React, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import s from './googleLogin.module.css';

export default function GoogleAuthLogin() {
  const clientId =
    '463298109619-0l7oo5cjm7sigeg3fpphvcrgogk4c0hm.apps.googleusercontent.com';

  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);

  const onLoginSuccess = res => {
    console.log('Login success:', res.profileObj);
    setShowLoginBtn(false);
    setShowLogoutBtn(true);
  };

  const onFailureSuccess = res => {
    console.log('Login failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been signed ou successfully');
    setShowLoginBtn(true);
    setShowLogoutBtn(false);
  };

  return (
    <div className={s.googleBtn_container}>
      {showLoginBtn ? (
        <GoogleLogin
          clientId={clientId}
          // render={renderProps => (
          //   <button
          //     onClick={renderProps.onClick}
          //     disabled={renderProps.disabled}
          //     className={s.googleBtn}
          //   >
          //     Google
          //   </button>
          // )}
          buttonText="Google"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}
      {showLogoutBtn ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
