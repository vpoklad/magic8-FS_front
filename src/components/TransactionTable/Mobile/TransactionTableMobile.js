import s from './TransactionMobileTable.module.css'
import TransactionMobile from './TransactionMobile'


const TransactionMobileTable = ({ transactions }) => {

  return (
      <ul className={s.mobileList}>
        {!transactions
          ? 'Чекайте'
          : transactions.length > 0 &&
          transactions.map(item => (
            <TransactionMobile
              key={item.id}
              item={item}
            />)
          )}
      </ul>
  )
}

export default TransactionMobileTable