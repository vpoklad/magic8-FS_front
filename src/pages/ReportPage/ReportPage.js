import s from './ReportPage.module.css';
import Balance from '../../components/Balance/Balance';
import GoToBack from '../../components/GoToBack/GoToBack';
import ExpenseIncomeInReport from '../../components/ExpenseIncomeInReport/ExpenseIncomeInReport';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function ReportPage() {
    const dataReportsTotal = useSelector(getReports).totalExpInc;
    const income = dataReportsTotal.filter((el) => (el._id));
    const expense = dataReportsTotal.filter((el) => (el._id === false));

    const incomeData = income[0]['total'];


    console.log('income', income[0]['total']);
    console.log('expense', expense[0]);



    console.log(dataReportsTotal);

    return (
        <div>
            <GoToBack />
            <Balance showReport={true} showBtn={true} />
            <div className={s.generalData}>
                <div className={s.generalData__item}>
                    <span>Витрати:</span>
                    <span className={s.item__dataExpense}>-15000 грн.</span>
                </div>
                <div className={s.generalData__divider}></div>
                <div className={s.generalData__item}>
                    <span>Доходи:</span>
                    <span className={s.item__dataIncome}>{incomeData} грн.</span>
                </div>
            </div>
            <div className={s.dataExpenseIncome}>
                <ExpenseIncomeInReport />
            </div>
            <div className={s.dataChart}>
            </div>
            </div>
  );
}
