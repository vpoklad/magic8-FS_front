import s from './InputModal.module.css';

import { useEffect } from 'react';

const InputModal = ({ text, children, toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  const handleClose = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleClose}>
      <div className={s.Modal}>
        <button className={s.ButtonClose} onClick={handleClose}>
          {/* <svg width="6" height="11">
            <use href={}></use>
          </svg> */}
        </button>

        {/* <p className={s.Header}> {text} </p> */}

        <div className={s.ModalButtons}>{children}</div>
      </div>
    </div>
  );
};
export default InputModal;
