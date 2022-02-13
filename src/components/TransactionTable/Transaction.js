import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import thunks from '../../redux/transactions/thunks';
import { getAllTransactions } from '../../redux/transactions/selectors';
import { format } from 'date-fns';
import s from './TransactionTable.module.css';

const Transaction = props => {
  // const transactions = thunks.getAllTransactionsThunk();
  // const dispatch = useDispatch();

  const { children, ...data } = props;

  // useEffect(() => {
  //   dispatch(getAllTransactions());
  // }, [dispatch]);

  return (
    <>
      <tr className={s.TableTr}>
        <td className={s.TransactionDate}>{format(data.date, 'dd.MM.yyy')}</td>
        <td className={s.TransactionDescription}>{data.description}</td>
        <td className={s.TransactionCategory}>{data.category}</td>
        <td></td>
        <td className={s.TransactionDelete}>
          <button type="button" className={s.deleteBtn}></button>
        </td>
      </tr>
    </>
  );
};

export default Transaction;
