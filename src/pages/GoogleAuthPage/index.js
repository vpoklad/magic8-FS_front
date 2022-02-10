import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { set } from 'date-fns';
import { googleAuth } from '../../redux/auth/thunks';
import { getUser } from '../../redux/auth/selectors';

const GoogleAuthPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const verificationToken = searchParams.get('token');
  const avatarURL = searchParams.get('avatarURL');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUser);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  });

  if (email && verificationToken) {
    // Тут диспатчим action по заполнению полей в редаксе

    dispatch(googleAuth({ email, verificationToken, avatarURL }));

    // setTimeout(() => navigate('/', { replace: true }), 1000);
    return <p>Redirecting...</p>;
  }

  return (
    <>
      <h2>Google Auth page</h2>

      {(!email || !verificationToken) && (
        <>
          <p>Халепа! Щось трапилось! Спробуй пізніше... </p>
          <p>Або скористайся звичайною </p>
          <Link to="/authorization">авторизацією</Link>
        </>
      )}
    </>
  );
};

export { GoogleAuthPage };
