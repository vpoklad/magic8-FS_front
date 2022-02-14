import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputTable from '../InputTable/InputTable';
import { toast } from 'react-toastify';
import TransactionTable from '../TransactionTable/TransactionTable';
import s from './CountingTable.module.css'
import { getBalance } from '../../redux/balance/selectors';


const categoryExpense = [
        { value: 'transport', label: 'Транспорт' },
        { value: 'foods', label: 'Продукти' },
        { value: 'health', label: "Здоров'я" },
        { value: 'alcohol', label: 'Алкоголь' },
        { value: 'entertainment', label: 'Розваги' },
        { value: 'technics', label: 'Техніка' },
        { value: 'bills', label: "Комунальні платежі, зв'язок" },
        { value: 'houseGoods', label: "Все для дому"},
        { value: 'hobby', label: 'Спорт, хобі' },
        { value: 'education', label: 'Освіта' },
        { value: 'other', label: 'Інше' },
    ];

const categoryIncome = [
        { value: 'salary', label: 'ЗП' },
        { value: 'addIncome', label: 'Дод. дох' },
]
    
const CountingTable = () => {
    const dispatch = useDispatch();
    const [expense, setExpense] = useState(true);
    const [income, setIncome] = useState(false);
    const transactions = 0;

    const clickExpense = () => {
    if (expense) return;
    setIncome(false);
    setExpense(true);
    };

    const onError = error => {
    toast.error('Something went wrong, please try again later.');
    };

  const clickIncome = () => {
    if (income) return;
    setIncome(true);
    setExpense(false);
    };

    const onSuccess = () => {
        toast.succes('Transaction added');
        dispatch(getBalance());
    };
    
 /*    const onDeleteTransaction = id => {
    dispatch
  }; */

 /*  const onDeleteTransactionSuccess = () => {
    toast.success('Transaction has been deleted.');
    dispatch(getBalance());
  }; */

  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
  };
    return (
        <div className={s.counterWrapper}>
            <div className={s.mobileBtn}>
                <button
                    className={expense ? `${s.counterAccentBtn} ${s.counterBtn}` : s['counterBtn']}
                onClick ={clickExpense}>
            Витрати
          </button>
                <button
                    className={income ? `${s.counterAccentBtn} ${s.counterBtn}` : s['counterBtn']}
                    onClick={clickIncome}>
            Дохід
                </button>
            </div>
        
            {expense ? (
                <div className={s.counterContainer}>
                    <InputTable
                        options={categoryExpense}
                        
                    />
                <div>
                        <TransactionTable
                            transactions={transactions}
                        />
                    </div>
                     </div>)
         : ( <div className={s.counterContainer}>
                    <InputTable
                        options={categoryIncome}
                        income={income}
                    />
                <div>
                        <TransactionTable
                            transactions={transactions}
                            income={income}
                        />
                    </div>
                     </div>)}
        
        </div>
       
    );
}



export default CountingTable

