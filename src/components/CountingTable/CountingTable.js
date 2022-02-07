import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css'




const CountingTable = () => {




    return (
        <div>
            <div className={s.counterWrapper}>
                <button
                className={s.counterBtn}>
            Витрати
          </button>
                <button
                className={s.counterBtn}>
            Дохід
          </button>
        </div>
        <div>
            <TransactionTable></TransactionTable>
        </div>
        </div>
    );
}



export default CountingTable