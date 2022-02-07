import s from './Button.module.css';

const Button = ({ type, onClick, text }) => {
  return (
    <button type={type} className={s.Button} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
