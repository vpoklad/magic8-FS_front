import s from './Container.module.css';
// import AppBar from '../AppBar/AppBar';
import AuthForm from '../AuthForm/AuthForm';
import Balance from '../Balance/Balance';
import kapustaImg from './kapusta.svg';
import kapustaImg2 from './kapusta-2.svg';

// import titleMob from './Title-1.svg';
// import titleTab from './Title-2.svg';
// import titleDesk from './Title-3.svg';

export default function Container() {
  // const isLoggedIn = useSelector(getAuth);

  return (
    <div>
      <div className={s.hero}>
        <img
          className={s.kapustaImg}
          src={kapustaImg}
          alt="Kapusta"
          width="49"
        />
      </div>

      <div className={s.container}>
        <div className={s.title}></div>
        <AuthForm />
        <Balance showReport={true} showBtn={true} />
      </div>
      <img
        className={s.kapustaImg2}
        src={kapustaImg2}
        alt="Kapusta"
        width="83"
      />
    </div>
  );
}
