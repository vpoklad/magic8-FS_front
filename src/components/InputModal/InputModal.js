import { useEffect } from 'react';
import InputTable from '../InputTable/InputTable';

import s from './InputModal.module.css';

const InputModal = ({ text, children, closeInputModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      closeInputModal();
    }
  };
  const handleClose = e => {
    if (e.currentTarget === e.target) {
      closeInputModal();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleClose}>
      <div className={s.Modal}>
        <button className={s.ButtonClose} onClick={handleClose}></button>

        <p className={s.Header}> {text} </p>

        <div className={s.ModalButtons}>{children}</div>
      </div>
    </div>
  );
};
export default InputModal;
