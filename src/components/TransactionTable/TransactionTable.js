import s from './TransactionTable.module.css'
import Transaction from './Transaction'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionsThunk } from '../../redux/transactions/thunk';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';;


const TransactionTable = ({income, onDelete}) => {
  const dispatch = useDispatch();

    return(
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

         {/*  <tbody className={s.tableBody}>
            {(transactions.length > 0 &&
              transactions.map(item => (
                <Transaction
                  key={item.id}
                  item={item}
                  income={income}
                  onDelte = {onDelete}
                />)
            )) }
        </tbody> */}
      </table>
    </div>
    )
}

export default TransactionTable

