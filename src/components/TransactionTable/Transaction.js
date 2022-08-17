import s from './TransactionTable.module.css';
import sprite from '../../sprite.svg';
import { useDispatch } from 'react-redux';
import { delTransactionThunk } from '../../redux/transactions/thunk';
import { summaryThunk } from '../../redux/summary/thunk';

export const Transaction = ({ item, income }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const params = { year: year, month: month };

  const currValue = income ? item.sum : -item.sum;
  const dispatch = useDispatch();
  const items = !income ? 'expense' : 'income';
  const obj = { items, params };

  const delTransaction = async id => {
    await dispatch(delTransactionThunk(id));
    dispatch(summaryThunk(obj));
  };

  return (
    <tr className={s.tableTr}>
      <td className={s.transactionDate}>{item.date}</td>
      <td className={s.transactionDescription}>{item.description}</td>
      <td className={s.transactionCategory}>{item.categoryLabel}</td>
      <td
        className={income ? s['tableIncome'] : s['tableExpense']}
      >{`${currValue.toFixed(2)} грн.`}</td>
      <td className={s.transactionDelete}>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => delTransaction(item.id)}
        >
          <svg className={s.item_svg} width="18" height="18">
            <use href={`${sprite}#icon-delete`}></use>
          </svg>{' '}
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
