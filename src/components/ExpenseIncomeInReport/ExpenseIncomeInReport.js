import { useState } from 'react';
import ExpenseInReport from '../ExpenseInReport/ExpenseInReport';
import IncomeInReport from '../IncomeInReport/IncomeInReport';
import sprite from '../../sprite.svg';
import s from './ExpenseIncomeInReport.module.css';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';
import ChartBarExpInc from '../ChartBarExpInc/ChartBarExpInc';

export default function ExpenseIncomeInReport() {
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(false);
  const dataReports = useSelector(getReports);

    const clickChange = () => {
        if (expense) {
            setIncome(true);
            setExpense(false);
        }
        if (income) {
            setIncome(false);
            setExpense(true);
        }
    }

  let data;
  if (expense && dataReports) {
    data = dataReports.detailedCategoryStatistic.filter(
      el => el._id.typeOfTransaction === false,
    );
  }
  if (income && dataReports) {
    data = dataReports.detailedCategoryStatistic.filter(
      el => el._id.typeOfTransaction,
    );
  }
  console.log(dataReports);

  return (
    <div className={s.containerExpenseIncome}>
      <div className={s.dataExpenseIncome}>
        <div className={s.wrapper}>
          <button className={s.btnChevron} onClick={clickChange}>
            <svg className={s.item_svg} width="6" height="11">
              <use href={`${sprite}#icon-chevronLeft`}></use>
            </svg>
          </button>
          <p className={s.title}>{expense ? 'Витрати' : 'Доходи'}</p>
          <button className={s.btnChevron} onClick={clickChange}>
            <svg className={s.item_svg} width="6" height="11">
              <use href={`${sprite}#icon-chevronRight`}></use>
            </svg>
          </button>
        </div>

        {dataReports && (
          <>
            {expense ? (
              <ExpenseInReport data={dataReports} />
            ) : (
              <IncomeInReport data={dataReports} />
            )}
          </>
        )}
      </div>

      {dataReports && (
        <>
          {data.length > 0 && (
            <div className={s.dataExpenseIncome}>
              <ChartBarExpInc data={data} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
