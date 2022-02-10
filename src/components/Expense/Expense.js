import s from './Expense.module.css';
import sprite from '../../sprite.svg';

export default function Expense() {

    return (
        <div className={s.containerExpense}>
            <p className={s.title}>Витрати</p>
            <ul className={s.listExpense}>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-clay`}></use></svg></div>
                    <p className={s.item_name}>Products</p>
                </li>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-invoice`}></use></svg></div>
                    <p className={s.item_name}>Products</p>
                </li>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-ufo`}></use></svg></div>
                    <p className={s.item_name}>Развлечения</p>
                </li>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-car`}></use></svg></div>
                    <p className={s.item_name}>Products</p>
                </li>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-ufo`}></use></svg></div>
                    <p className={s.item_name}>Products</p>
                </li>
                <li className={s.listExpense_item}>
                    <p>5000</p>
                    <div className={s.item_img}><svg className={s.item_svg} width="56" height="56"><use href={`${sprite}#icon-car`}></use></svg></div>
                    <p className={s.item_name}>Развлечения</p>
                </li>


            </ul>

        </div>
    )
}