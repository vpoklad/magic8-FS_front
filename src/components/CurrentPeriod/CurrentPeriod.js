import s from './CurrentPeriod.module.css';
import sprite from '../../sprite.svg';
import { useDatepicker } from '@datepicker-react/hooks';
import { useDispatch } from 'react-redux';
import Month from './Month';
import { getReportThunk } from '../../redux/reports/thunk';
import DatepickerContext from './datepickerContext';

export default function CurrentPeriod() {
  const dispatch = useDispatch();

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
        break;
      case 'decrement':
        goToPreviousMonthsByOneMonth();
        getReport();
        break;
      default:
        break;
    }
  };

  const rendMonth = activeMonths[0];

  const month = rendMonth.month;
  const year = rendMonth.year;

  const getReport = () => {
    dispatch(getReportThunk({ month, year }));
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
                key={`${rendMonth.year}-${rendMonth.month}`}
                year={rendMonth.year}
                month={rendMonth.month}
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
