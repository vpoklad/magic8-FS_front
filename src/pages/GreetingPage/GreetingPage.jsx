import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import s from './GreetingPage.module.css';
export default function GreetingPage() {
  const navigate = useNavigate();

  const login = () => {
    console.log('pressed');
    navigate('/login', { replace: true });
  };

  return (
    <div className={s.meta}>
      <h2>Вітаю!</h2>
      <p>Ваша електронна адреса підтвердженна!</p>
      <p>Скористайтеся вашим логіном та паролем для входу в наш додаток</p>
      <Button type="button" onClick={login} text="Login" />
    </div>
  );
}
