import s from './GoToBack.module.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function GoToBack() {
  const mobile = useMediaQuery('(max-width: 767px)');

  return (
    <button type="button" className={s.goBackButton}>
      <Link to="/" className={s.link}>
        <KeyboardBackspaceOutlinedIcon className={s.goToBackIcon} />
      </Link>
      {!mobile && (
        <Link to="/" className={`${s.link} ${s.text}`}>
          Повернутись на головну
        </Link>
      )}
    </button>
  );
}
