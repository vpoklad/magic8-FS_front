import InputTable from '../InputTable/InputTable';
import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css'




const CountingTable = () => {




    return (
        <div className={s.counterWrapper}>
            <div className={s.mobileBtn}>
                <button
                className={s.counterBtn}>
            Витрати
          </button>
                <button
                className={s.counterBtn}>
            Дохід
                </button>
            </div>
        <div className={s.counterContainer}>
            <InputTable></InputTable>
        <div>
            <TransactionTable></TransactionTable>
        </div>
        </div>
        </div>
    );
}



export default CountingTable

