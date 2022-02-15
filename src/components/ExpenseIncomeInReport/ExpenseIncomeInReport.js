import { useState } from 'react';
import ExpenseInReport from '../ExpenseInReport/ExpenseInReport';
import IncomeInReport from '../IncomeInReport/IncomeInReport';
import sprite from '../../sprite.svg';
import s from './ExpenseIncomeInReport.module.css';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function ExpenseIncomeInReport() {
    const [expense, setExpense] = useState(true);
    const [income, setIncome] = useState(false);
    const dataReports = useSelector(getReports);

    // const dataReports = {
    //     detailedCategoryStatistic: [
    //         { _id: { typeOfTransaction: false, category: "transport", categoryLabel: "Транспорт" }, total: 550 },
    //         { _id: { typeOfTransaction: true, category: "salary", categoryLabel: "ЗП" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: true, category: "addIncome", categoryLabel: "Дод. дох." }, total: 55.98 },
    //         { _id: { typeOfTransaction: false, category: "foods", categoryLabel: "Продукти" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "health", categoryLabel: "Здоров'я'" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "alcohol", categoryLabel: "Алкоголь" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "entertainment", categoryLabel: "Розваги" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "entertainment", categoryLabel: "Розваги" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "houseGoods", categoryLabel: "Все для дому" }, total: 5500.98 },
    //         // { _id: { typeOfTransaction: false, category: "houseGoods", categoryLabel: "Все для дому" }, total: 5500.98 },
    //         // { _id: { typeOfTransaction: false, category: "technics", categoryLabel: "Техніка" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "bills", categoryLabel: "Комуналка, зв'язок" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "hobby", categoryLabel: "Спорт, хобі" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "education", categoryLabel: "Освіта" }, total: 5500.98 },
    //         { _id: { typeOfTransaction: false, category: "other", categoryLabel: "Інше" }, total: 5500.98 }]

    // }

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
                <p className={s.title}>{expense ? 'Витрати' : 'Доходи'}</p>
                <button
                    className={s.btnChevron}
                    onClick={clickChange}>
                    <svg className={s.item_svg} width="4" height="10"><use href={`${sprite}#icon-chevronRight`}></use></svg>
                </button>
            </div>
            {dataReports &&
                <>
                {expense ? <ExpenseInReport data={dataReports} /> : <IncomeInReport data={dataReports} />}
            </>
            }

        </div>

    )



}

