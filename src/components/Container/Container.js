import s from './Container.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/selectors';

// import AppBar from '../AppBar/AppBar';
import AuthForm from '../AuthForm/AuthForm';
import Balance from '../Balance/Balance';
import kapustaImg from './kapusta.svg';
import kapustaImg2 from './kapusta-2.svg';

import titleMob from './Title-1.svg';
import titleTab from './Title-2.svg';
// import titleDesk from './Title-3.svg';
import kapustaBlock from './kapusta-block.svg';
import kapusta2pcs from './kapusta2pcs.svg';

export default function Container() {
  // const isLoggedIn = useSelector(getAuth);
  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  // const desktop = useMediaQuery('(min-width: 1280px)');
  const isLoggedIn = useSelector(getUser);

  return (
    <div>
      <div className={s.hero}>
        {!isLoggedIn && (
          <>
            {mobile && (
              <>
                <img
                  className={s.kapustaImg}
                  src={kapustaImg}
                  alt="Kapusta"
                  width="49"
                />
              </>
            )}
            {tablet && (
              <>
                <img
                  className={s.kapustaBlock}
                  src={kapustaBlock}
                  alt="Kapusta"
                />
              </>
            )}
          </>
        )}
      </div>

      <div className={s.container}>
        {!isLoggedIn && (
          <>
            {mobile && (
              <>
                <img className={s.title} src={titleMob} alt="Kapusta" />
              </>
            )}
            {tablet && (
              <>
                <img className={s.title} src={titleTab} alt="Kapusta" />
              </>
            )}
          </>
        )}

        <AuthForm />
        <Balance showReport={true} showBtn={true} />
      </div>
      {!isLoggedIn && (
        <>
          {mobile && (
            <>
              <img
                className={s.kapustaImg2}
                src={kapustaImg2}
                alt="Kapusta"
                width="83"
              />
            </>
          )}
          {tablet && (
            <>
              <img className={s.kapusta2pcs} src={kapusta2pcs} alt="Kapusta" />
            </>
          )}
        </>
      )}
    </div>
  );
}
