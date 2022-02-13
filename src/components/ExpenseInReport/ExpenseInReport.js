import s from './ExpenseInReport.module.css';
import sprite from '../../sprite.svg';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function ExpenseInReport({ data }) {
    const categoryExpense = {
         transport: 'Транспорт',
         foods: 'Продукти' ,
        health: "Здоров'я",
         alcohol: 'Алкоголь',
         entertainment: 'Розваги' ,
        houseGoods: 'Все для дому' ,
         technics: 'Техніка' ,
         bills: "Комунальні платежі, зв'язок" ,
         hobby: 'Спорт, хобі' ,
         education: 'Освіта' ,
        other: 'Інше'
    };

    const dataReports = useSelector(getReports).detailedCategoryStatistic;



    const expense = dataReports.filter((el) => (el._id.typeOfTransaction === false));

    return (
        <>
            <ul className={s.listExpense}>
                {expense.map(({ total, _id }) => (
                    <li
                        className={s.listExpense_item}>
                        <p>{total}</p>
                        <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-${_id.category}`}></use></svg></div>
                        <p className={s.item_name}>{_id.label}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}