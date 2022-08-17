import s from './TransactionMobileTable.module.css';
import TransactionMobile from './TransactionMobile';
import { useState } from 'react';
import DatePickerComponent from '../../DatePicker/DatePicker';

const TransactionMobileTable = ({ transactions }) => {
  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);

  const getDate = value => {
    setDate(value);
  };

  const empty = transactions === null || transactions.length === 0;
  return (
    <div>
      <div className={s.datepieckerWrapper}>
        <DatePickerComponent getDate={getDate} />
      </div>
      <ul className={s.mobileList}>
        {empty
          ? (<p className={s.noTransactions}>Дані про транзакцакції відсутні</p>)
          : transactions.length > 0 &&
            transactions.map(item => (
              <TransactionMobile key={item.id} item={item} />
            ))}
      </ul>
    </div>
  );
};

export default TransactionMobileTable;
