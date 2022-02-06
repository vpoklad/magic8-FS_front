import s from './Balance.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import sprite from '../../sprite.svg';
import { addBalanceThunk } from '../../redux/balance/thunk';

export default function Balance(showReport) {
  const [value, setValue] = useState('');
  const [readonly, setReadonly] = useState(null);
  const dispatch = useDispatch();

  const сhangeBalance = e => {
    const { value } = e.target;

    setValue(value);
  };

  const handleBalance = () => {
    dispatch(addBalanceThunk(value));
    setReadonly('readonly');
    console.log(showReport);
  };

  return (
    <div className={s.container}>
      {showReport && (
        <div className={s.reports}>
          <Link to="/reports" className={s.link}>
            Перейти до звітів
          </Link>
          <svg width="24" height="24" className={s.icon}>
            <use href={`${sprite}#icon-barchart`} fill="red" />
          </svg>
        </div>
      )}

      <div className={s.containerBalance}>
        <span className={s.text}>Баланс:</span>
        <div className={s.containerInput}>
          <input
            className={s.balanceInput}
            type="text"
            value={value}
            onChange={сhangeBalance}
            readOnly={readonly}
          />

          {readonly ? (
            <button
              className={s.editBtn}
              type="button"
              onClick={() => setReadonly(null)}
            >
              <EditOutlinedIcon className={s.iconEdit} />
            </button>
          ) : (
            <button
              className={s.confirmBtn}
              type="button"
              onClick={handleBalance}
            >
              Підтвердити
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
