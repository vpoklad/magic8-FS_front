import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { set } from 'date-fns';
import { google } from '../../redux/auth/slices';
import { getUser } from '../../redux/auth/selectors';

const GoogleAuthPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const avatarURL = searchParams.get('avatarURL');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUser);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  });

  if (email && token) {
    dispatch(google({ email, token, avatarURL }));

    // setTimeout(() => navigate('/', { replace: true }), 1000);
    return <p>Redirecting...</p>;
  }

  return (
    <>
      <h2>Google Auth page</h2>

      {(!email || !token) && (
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
