import s from './ReportPage.module.css';
import Balance from '../../components/Balance/Balance';
import GoToBack from '../../components/GoToBack/GoToBack';
import ExpenseIncomeInReport from '../../components/ExpenseIncomeInReport/ExpenseIncomeInReport';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function ReportPage() {
  const dataReportsTotal = useSelector(getReports);

  return (
    <div>
      <GoToBack />
      <Balance showBtn={true} showReportBtn={false} />
      <div className={s.generalData}>
        <div className={s.generalData__item}>
          <span>Витрати:</span>
          <span className={s.item__dataExpense}>
            -{' '}
            {dataReportsTotal ? (
              <>
                {dataReportsTotal.totalExpInc.filter(el => el._id === false)
                  .length > 0
                  ? dataReportsTotal.totalExpInc.filter(
                      el => el._id === false,
                    )[0].total
                  : 0}
              </>
            ) : (
              0
            )}{' '}
            грн.
          </span>
        </div>
        <div className={s.generalData__divider}></div>
        <div className={s.generalData__item}>
          <span>Доходи:</span>
          <span className={s.item__dataIncome}>
            {dataReportsTotal ? (
              <>
                {dataReportsTotal.totalExpInc.filter(el => el._id).length > 0
                  ? dataReportsTotal.totalExpInc.filter(el => el._id)[0].total
                  : 0}
              </>
            ) : (
              0
            )}{' '}
            грн.
          </span>
        </div>
      </div>
      <div className={s.dataExpenseIncome}>
        <ExpenseIncomeInReport />
      </div>
      <div className={s.dataChart}></div>
    </div>
  );
}
