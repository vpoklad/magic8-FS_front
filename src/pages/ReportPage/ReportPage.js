import s from './ReportPage.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Balance from '../../components/Balance/Balance';
import GoToBack from '../../components/GoToBack/GoToBack';
import ExpenseIncomeInReport from '../../components/ExpenseIncomeInReport/ExpenseIncomeInReport';
import ChartBar from '../../components/ChartBar/ChartBar';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function ReportPage() {
  const dataReportsTotal = useSelector(getReports);


  const desktop = useMediaQuery('(min-width: 1280px)');

  return (
    <div>
      <div className={s.containerNavigation}>
        <GoToBack />
        <Balance
          showBtn={desktop ? true : false}
          inputMobile={s.inputMobile}
          spanMobile={s.spanMobile}
          containerMobile={s.containerMobile}
        />
      </div>

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
      <div className={s.dataChart}>
        <ChartBar />
      </div>
    </div>

  );
}
