import s from './Container.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/selectors';

import kapustaImg from './kapusta.svg';
import kapustaImg2 from './kapusta-2.svg';

import titleMob from './Title-1.svg';
import titleTab from './Title-2.svg';
import kapusta2pcs from './kapusta2pcs.svg';

export default function Container({ children }) {
  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1280px)');
  const isLoggedIn = useSelector(getUser);

  return (
    <>
      {!isLoggedIn && (
        <div>
          <div className={s.hero}>
            {mobile && (
              <img
                className={s.kapustaImg}
                src={kapustaImg}
                alt="Kapusta"
                width="49"
              />
            )}
            {tablet && <div className={s.kapustaBlock}></div>}
          </div>
          <div className={s.container__nAuth}>
            {mobile && <img className={s.title} src={titleMob} alt="Kapusta" />}
            {tablet && <img className={s.title} src={titleTab} alt="Kapusta" />}
            {children}
          </div>
          {mobile && (
            <img
              className={s.kapustaImg2}
              src={kapustaImg2}
              alt="Kapusta"
              width="83"
            />
          )}
          {tablet && (
            <img className={s.kapusta2pcs} src={kapusta2pcs} alt="Kapusta" />
          )}
        </div>
      )}

      {isLoggedIn && (
        <div>
          <div className={s.hero}></div>
          <div className={s.container__auth}>{children}</div>
          {isLoggedIn && (
            <>
              {tablet && !desktop && (
                <img
                  className={s.kapusta2pcs__auth}
                  src={kapusta2pcs}
                  alt="Kapusta"
                />
              )}
              {desktop && <div className={s.kapustaBlock}></div>}
            </>
          )}
        </div>
      )}
    </>
  );
}
