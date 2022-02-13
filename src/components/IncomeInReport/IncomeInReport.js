import s from './IncomeInReport.module.css';
import sprite from '../../sprite.svg';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function IncomeInReport({ data }) {
    const dataReports = useSelector(getReports).detailedCategoryStatistic;

    const income = dataReports.filter((el) => (el._id.typeOfTransaction));

    return (
        <>
            <ul className={s.listExpense}>
                {income.map((el) => (
                    <li
                        className={s.listExpense_item}>
                        <p>{el.total}</p>
                        <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-${el._id.category}`}></use></svg></div>
                        <p className={s.item_name}>{el._id.category}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}