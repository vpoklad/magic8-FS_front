import { useState, useEffect } from 'react';
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
  const [result, setResult] = useState([]);
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
  };
  let onClick = e => {
    const option = e.currentTarget.id;
    const result = chartData.filter(el => el._id.category === option);
    setResult(result);
  };

  let data;
  let chartData;

  if (expense) {
    data = dataReports?.detailedCategoryStatistic.filter(
      el => el._id.typeOfTransaction === false,
    );
    chartData = dataReports?.detailedDescriptionStatistic.filter(
      el => el._id.typeOfTransaction === false,
    );
  }
  if (income) {
    data = dataReports?.detailedCategoryStatistic.filter(
      el => el._id.typeOfTransaction,
    );
    chartData = dataReports?.detailedDescriptionStatistic.filter(
      el => el._id.typeOfTransaction,
    );
  }

  useEffect(() => {
    const intialResult = chartData?.filter(
      el => el._id.category === data[0]._id.category,
    );
    setResult(intialResult);
  }, [dataReports, expense]);

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
              <ExpenseInReport data={dataReports} onClick={onClick} />
            ) : (
              <IncomeInReport data={dataReports} onClick={onClick} />
            )}
          </>
        )}
      </div>

      {dataReports && (
        <>
          {data.length > 0 && (
            <div className={s.dataExpenseIncome}>
              <ChartBarExpInc chartData={result} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
