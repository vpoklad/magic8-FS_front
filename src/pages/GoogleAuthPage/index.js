import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { googleAuth } from '../../redux/auth/thunks';

const GoogleAuthPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const avatarURL = searchParams.get('avatarURL');

  const dispatch = useDispatch();

  useEffect(() => {
    if (email && token) {
      dispatch(googleAuth({ email, token, avatarURL }));
    }
  }, []);

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
