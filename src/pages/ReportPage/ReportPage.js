import s from './ReportPage.module.css';
import Balance from '../../components/Balance/Balance';

export default function ReportPage() {

    return (
        <div>
            <Balance />
            <div className={s.generalData}>
                <div className={s.generalData__item}>
                    <span>Витрати:</span>
                    <span className={s.item__dataExpense}>-15000 грн.</span>
                </div>
                <div className={s.generalData__divider}></div>
                <div className={s.generalData__item}>
                    <span>Доходи:</span>
                    <span className={s.item__dataIncome}>13000 грн.</span>
                </div>
            </div>
            <div className={s.dataExpenseIncome}>
            </div>
            <div className={s.dataChart}>
            </div>
        </div>

    )
}
