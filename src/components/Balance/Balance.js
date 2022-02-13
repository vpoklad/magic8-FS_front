import s from './Balance.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { addBalanceThunk, getBalanceThunk } from '../../redux/balance/thunk';
import { getBalance } from '../../redux/balance/selectors';
import { Notification } from '../Notification/Notification';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Report from '../Report/Report';

export default function Balance({ showBtn = true }) {
  const [value, setValue] = useState('00.00');
  const [readonly, setReadonly] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const balance = useSelector(getBalance);

  useEffect(() => {
    if (!showBtn) {
      setReadonly(true);
    }
  }, [showBtn]);

  useEffect(() => {
    dispatch(getBalanceThunk());
    setValue(balance);
    if (balance > 0) {
      setReadonly('readonly');
    }
  }, [balance, dispatch]);

  const сhangeBalance = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleBalance = () => {
    dispatch(addBalanceThunk(value));

    setReadonly('readonly');
    toggleModal();
    console.log('balance', balance);
    console.log('value', value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.container}>
        <Report />
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
                pattern="\d+(\.\d{2})?"
              />
              <span className={s.span}>UAN</span>
              {!balance && <Notification />}
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
                  onClick={toggleModal}
                >
                  Підтвердити
                </button>
              ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal text={'Ви впевнені?'} toggleModal={toggleModal}>
          <Button type="button" text="так" onClick={handleBalance} />
        </Modal>
      )}
    </>
  );
}
