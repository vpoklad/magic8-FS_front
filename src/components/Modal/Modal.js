import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ text, children, toggleModal }) => {
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
        <CloseIcon
          className={s.ButtonClose}
          fontSize="small"
          type="button"
          onClick={handleClose}
        />

        <p className={s.Header}> {text} </p>

        <div className={s.ModalButtons}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
