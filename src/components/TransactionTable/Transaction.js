import { format } from 'date-fns'
import s from './TransactionTable.module.css'

const Transaction = ({ item, income, onDelete }) => {
  
  const currValue = income ? item.sum : -item.sum;

    return (
    <tr className={s.tableTr}>
      <td className={s.transactionDate}>{format(new Date(item.date), 'dd.MM.yyyy')}</td>
      <td className={s.transactionDescription}>{item.description}</td>
        <td className={s.transactionCategory}>{item.categoryLabel}</td>
        <td className={income ? ['tableIncome'] : s['tableExpense']}>{`${currValue.toFixed(2)} грн.`}</td>
      <td></td>
      <td className={s.transactionDelete}>
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

