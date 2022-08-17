import { createPortal } from 'react-dom';
import s from './Spinner.module.css'
const modalRoot = document.querySelector('#modal');
export default function Spinner() {
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.loader}></div>
    </div>,
    modalRoot,
  );
}
