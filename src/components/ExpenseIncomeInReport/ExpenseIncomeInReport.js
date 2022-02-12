import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseInReport from '../ExpenseInReport/ExpenseInReport';
import IncomeInReport from '../IncomeInReport/IncomeInReport';
import sprite from '../../sprite.svg';
import s from './ExpenseIncomeInReport.module.css'

export default function ExpenseIncomeInReport() {
    const detailedCategoryStatistic = [
            {
                "_id": {
                    "typeOfTransaction": false,
                    "category": "health",
                    "label": "Здоров'я",
                },
                "total": 5152.2
            },
            {
                "_id": {
                    "typeOfTransaction": true,
                    "category": "salary",
                },
                "total": 40408.52
            },
            {
                "_id": {
                    "typeOfTransaction": false,
                    "category": "foods",
                },
                "total": 4058
            },
            {
                "_id": {
                    "typeOfTransaction": true,
                    "category": "addIncome",
                },
                "total": 9712.52
            },
            {
                "_id": {
                    "typeOfTransaction": false,
                    "category": "transport",
                },
                "total": 5905.65
            },
            {
                "_id": {
                    "typeOfTransaction": false,
                    "category": "alcohol",
                },
                "total": 852.55
            }
    ]


    const dispatch = useDispatch();
    const [expense, setExpense] = useState(true);
    const [income, setIncome] = useState(false);

    const clickChange = () => {
        if (expense) {
            setIncome(true);
            setExpense(false);
        }
        if (income) {
            setIncome(false);
            setExpense(true);
        }
    };

    return (
        <div className={s.containerExpenseIncome}>
            <div className={s.wrapper}>
                <button
                    className={s.btnChevron}
                    onClick={clickChange}>
                    <svg className={s.item_svg} width="4" height="10"><use href={`${sprite}#icon-chevronLeft`}></use></svg>
                </button>
                <p className={s.title}>{expense ? 'Витрати' : 'Дохід'}</p>
                <button
                    className={s.btnChevron}
                    onClick={clickChange}>
                    <svg className={s.item_svg} width="4" height="10"><use href={`${sprite}#icon-chevronRight`}></use></svg>
                </button>
            </div>
            {expense ? <ExpenseInReport data={detailedCategoryStatistic} /> : <IncomeInReport data={detailedCategoryStatistic} />}

        </div>

    )



}

