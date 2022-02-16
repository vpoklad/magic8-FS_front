import s from './ExpenseIncomeInReportItem.module.css';
import sprite from '../../sprite.svg';

export default function ExpenseIncomeInReportItem({ total, id, data }) {
    const selectCategory = () => {

    }

    return (
        <li onClick={selectCategory}
            className={s.listExpense_item}>
            <p>{total}</p>
            <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-${id.category}`}></use></svg></div>
            <p className={s.item_name}>{id.categoryLabel}</p>
        </li>
    );
}
