import s from './IncomeInReport.module.css';
import ExpenseIncomeInReportItem from '../ExpenseIncomeInReportItem/ExpenseIncomeInReportItem';
import shortid from 'shortid';

export default function IncomeInReport({data}) {

     const income = data.detailedCategoryStatistic.filter((el) => (el._id.typeOfTransaction));

    return (
        <>
            <ul className={s.listExpense}>
                {income.map(({ total, _id }) => (
                    <ExpenseIncomeInReportItem key={shortid.generate()} total={total} id={_id} />
                ))}
            </ul>
        </>
    )
}