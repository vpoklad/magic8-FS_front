import { format } from 'date-fns'
import s from './TransactionMobileTable.module.css'
import sprite from '../../../sprite.svg';
import { useDispatch } from 'react-redux'
import { delTransactionThunk } from '../../../redux/transactions/thunk';

export const TransactionMobile = ({ item }) => {

  const income = item.typeOfTransaction
  const currValue = income ? item.sum : -item.sum;
  const dispatch = useDispatch();
  console.log(income)
  const delTransaction = (id) => {
    dispatch(delTransactionThunk(id))
  }
  return (
          <li className={s.mobileItem}> 
            <p className={s.mobileDate}>{format(new Date(item.date), 'dd.MM.yyyy')}</p>
            <p className={s.mobileDescription}>{item.description}</p>
            <p className={s.mobileCategory}>{item.categoryLabel}</p>
            <p className={income ? s['mobileIncome'] : s['mobileExpense']}>{`${currValue.toFixed(2)} грн.`}</p>
              <button
                type="button"
                className={s.mobileDelete}
                onClick={() => delTransaction(item.id)}>
                <svg className={s.item_svg} width="18" height="18">
                  <use href={`${sprite}#icon-delete`}></use>
                </svg>{' '}
              </button>
          </li>
    )
}


export default TransactionMobile;