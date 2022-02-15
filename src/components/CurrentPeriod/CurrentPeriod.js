import s from './CurrentPeriod.module.css';
import sprite from '../../sprite.svg';

import { useDatepicker } from '@datepicker-react/hooks';
import { useDispatch } from 'react-redux';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import Month from './Month';
import { getReportThunk } from '../../redux/reports/thunk';
import DatepickerContext from './datepickerContext';

export default function CurrentPeriod() {
  console.log(uk);
  const {
    activeMonths,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
  } = useDatepicker({});

  const onClick = e => {
    switch (e.currentTarget.name) {
      case 'increment':
        goToNextMonthsByOneMonth();

        getReport();
        getReport(activeMonths[1].month, activeMonths[1].year);
        break;
      case 'decrement':
        goToPreviousMonthsByOneMonth();

        getReport(activeMonths[1].month, activeMonths[1].year);

        break;
      default:
        break;
    }
  };
  console.log(activeMonths);

  const month = activeMonths[0];

  const dispatch = useDispatch();

  const getReport = (month, year) => {
    const params = { year: year, month: month };
    dispatch(getReportThunk(params));
  };

  return (
    <div className={s.containerCurrentPeriod}>
      <div>
        <p className={s.CurrentPeriodTitle}>Поточний період:</p>{' '}
        <div className={s.selectorWrapper}>
          <DatepickerContext.Provider value={{}} locale="uk">
            <button className={s.btnChevron} name="decrement" onClick={onClick}>
              <svg className={s.item_svg} width="6" height="11">
                <use href={`${sprite}#icon-chevronLeft`}></use>
              </svg>
            </button>
            <div className={s.period}>
              <Month
                key={`${month.year}-${month.month}`}
                year={month.year}
                month={month.month}
              />
            </div>
            <button className={s.btnChevron} name="increment" onClick={onClick}>
              <svg className={s.item_svg} width="6" height="11">
                <use href={`${sprite}#icon-chevronRight`}></use>
              </svg>{' '}
            </button>
          </DatepickerContext.Provider>
        </div>
      </div>
    </div>
  );
}
