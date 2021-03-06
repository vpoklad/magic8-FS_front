import s from './Balance.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import sprite from '../../sprite.svg';
import { addBalanceThunk } from '../../redux/balance/thunk';
import { getBalance } from '../../redux/balance/selectors';

export default function Balance({ showReport, showBtn }) {
  const [value, setValue] = useState('00.00');
  const [readonly, setReadonly] = useState(null);
  const dispatch = useDispatch();

  const balance = useSelector(getBalance);

  useEffect(() => {
    if (!showBtn) {
      setReadonly(true);
    }
    setValue(balance);
  }, [balance, showBtn]);

  const сhangeBalance = e => {
    const { value } = e.target;

    setValue(value);
  };

  const handleBalance = () => {
    dispatch(addBalanceThunk(value));
    setReadonly('readonly');
  };

  return (
    <div className={s.container}>
      {showReport && (
        <div className={s.reports}>
          <Link to="/reports" className={s.link}>
            Перейти до звітів
          </Link>
          <svg width="24" height="24" className={s.icon}>
            <use href={`${sprite}#icon-barchart`} />
          </svg>
        </div>
      )}

      <div className={s.containerBalance}>
        <span className={s.text}>Баланс:</span>
        <div className={s.containerInput}>
          <div className={s.containerRelative}>
            <input
              className={s.balanceInput}
              type="text"
              value={value}
              onChange={сhangeBalance}
              readOnly={readonly}
            />
            <span className={s.span}>UAN</span>
          </div>

          {readonly && showBtn && (
            <button
              className={s.editBtn}
              type="button"
              onClick={() => setReadonly(null)}
            >
              <EditOutlinedIcon className={s.iconEdit} />
            </button>
          )}
          {!!readonly ||
            (!!showBtn && (
              <button
                className={s.confirmBtn}
                type="button"
                onClick={handleBalance}
              >
                Підтвердити
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
