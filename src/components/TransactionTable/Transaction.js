import { format } from 'date-fns'
import s from './TransactionTable.module.css'

const Transaction = ({ item, income, onDelete }) => {
  
  const currValue = income ? item.amount : -item.amount;

    return (
    <tr className={s.TableTr}>
      <td className={s.TransactionDate}>{format(new Date(item.date), 'dd.MM.yyyy')}</td>
      <td className={s.TransactionDescription}>{item.description}</td>
        <td className={s.TransactionCategory}>{item.category}</td>
        <td className={income ? ['counterAccentBtn'] : s['counterBtn']}>{`${currValue.toFixed(2)} грн.`}</td>
      <td></td>
      <td className={s.TransactionDelete}>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => onDelete(item._id)}>
        </button>
      </td>
    </tr>
    )
}


export default Transaction;

