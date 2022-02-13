import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import thunks from '../../redux/transactions/thunks';

import s from './TransactionTable.module.css';
import Transaction from './Transaction';

const TransactionTable = props => {
  // const transactions = thunks.getAllTransactionsThunk();
  // const dispatch = useDispatch();

  const { children, ...data } = props;

  // useEffect(() => {
  //   dispatch(thunks.getAllTransactions());
  // }, [dispatch]);

  return (
    <div className={s.tableDesk}>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.tableTr}>
            <th className={s.tableTransDate}>Дата</th>
            <th className={s.tableTransDescr}>Опис</th>
            <th className={s.tableTransCategory}>Категорія</th>
            <th className={s.tableTransAmount}>Сума</th>
          </tr>
        </thead>

        <tbody className={s.tableBody}>
          {/* {transactions.length > 0 &&
            transactions.map(() => (
              <Transaction
                date={transactions.date}
                description={transactions.description}
                category={transactions.category}
              />
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
