import s from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
       {text}
    </button>
  );
}
export default Button
