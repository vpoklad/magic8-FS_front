import s from './ExpenseInReport.module.css';
import ExpenseIncomeInReportItem from '../ExpenseIncomeInReportItem/ExpenseIncomeInReportItem';
import shortid from 'shortid';

export default function ExpenseInReport({ data }) {
    const expense = data.detailedCategoryStatistic.filter((el) => (el._id.typeOfTransaction === false));

    return (
            <ul className={s.listExpense}>
            {expense.map(({ total, _id }) => (
                <ExpenseIncomeInReportItem key={shortid.generate()} total={total} id={_id} />
                ))}
            </ul>
    )
}