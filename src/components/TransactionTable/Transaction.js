import { format } from 'date-fns'
import s from './TransactionTable.module.css'
import sprite from '../../sprite.svg';
import { useDispatch } from 'react-redux'
import { delTransactionThunk, getTransactionsThunk } from '../../redux/transactions/thunk';

export const Transaction = ({ item, income }) => {

  
  const currValue = income ? item.sum : -item.sum;
  const dispatch = useDispatch();

  const delTransaction = (id) => {
    dispatch(delTransactionThunk(id))
    dispatch(getTransactionsThunk())
  };
  
  return (
          <tr className={s.tableTr}> 
            <td className={s.transactionDate}>{format(new Date(item.date), 'dd.MM.yyyy')}</td>
            <td className={s.transactionDescription}>{item.description}</td>
            <td className={s.transactionCategory}>{item.categoryLabel}</td>
            <td className={income ? s['tableIncome'] : s['tableExpense']}>{`${currValue.toFixed(2)} грн.`}</td>
            <td className={s.transactionDelete}>
              <button
                type="button"
                className={s.deleteBtn}
                onClick={() => delTransaction(item.id)}>
                <svg className={s.item_svg} width="18" height="18">
                  <use href={`${sprite}#icon-delete`}></use>
                </svg>{' '}
              </button>
            </td>
          </tr>
    )
}


export default Transaction;

