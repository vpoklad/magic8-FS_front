import { format } from 'date-fns'
import s from './TransactionTable.module.css'

const Transaction = () => {

    return (
    <tr className={s.TableTr}>
      <td className={s.TransactionDate}></td>
      <td className={s.TransactionDescription}></td>
      <td className={s.TransactionCategory}></td>
      <td></td>
      <td className={s.TransactionDelete}>
        <button
          type="button"
          className={s.deleteBtn}>
        </button>
      </td>
    </tr>
    )
}


export default Transaction;

