import s from './CurrentPeriod.module.css';
import sprite from '../../sprite.svg';

import { useState } from 'react';
import { useDatepicker, START_DATE } from '@datepicker-react/hooks';
import { useDispatch } from 'react-redux';

import { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import Month from './Month';
import { getReportThunk } from '../../redux/reports/thunk';
import DatepickerContext from './datepickerContext';

export default function CurrentPeriod() {
  registerLocale('uk', uk);
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

// import s from './CurrentPeriod.module.css';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import sprite from '../../sprite.svg';
// import { getReportThunk } from '../../redux/reports/thunk';

// import React from 'react';
// import DayPicker from 'react-day-picker';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import moment from 'moment';
// import 'react-day-picker/lib/style.css';
// import 'moment/locale/uk';
// import MomentLocaleUtils, {
//   formatDate,
//   parseDate,
// } from 'react-day-picker/moment';

// export default function CurrentPeriod() {
//   const dispatch = useDispatch();

//   const getReport = (month, year) => {
//     const params = { year: year, month: month };
//     dispatch(getReportThunk(params));
//   };

//   const onClick = e => {
//     const input = document.getElementById('date');

//     switch (e.currentTarget.name) {
//       case 'increment':
//         input.stepUp(1);
//         break;
//       case 'decrement':
//         input.stepDown(1);
//         break;
//       default:
//         break;
//     }
//     // setDate();
//     const month = input.value.substring(5);
//     const year = input.value.substring(0, 4);
//     getReport(Number(month) - 1, year);
//   };

//   const Navbar = ({
//     nextMonth,
//     previousMonth,
//     onPreviousClick,
//     onNextClick,
//     className,
//     localeUtils,
//   }) => {
//     const months = localeUtils.getMonths();
//     const prev = months[previousMonth.getMonth()];
//     const next = months[nextMonth.getMonth()];
//     const styleLeft = {
//       float: 'left',
//     };
//     const styleRight = {
//       float: 'right',
//     };

//     console.log(months);
//     return (
//       <div className={s.className}>
//         <button style={styleLeft} onClick={() => onPreviousClick()}>
//           ← {prev.slice(0, 3)}
//         </button>

//         <button style={styleRight} onClick={() => onNextClick()}>
//           {next.slice(0, 3)} →
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className={s.containerCurrentPeriod}>
//         <div>
//           <p className={s.CurrentPeriodTitle}>Поточний період:</p>
//           <div className={s.selectorWrapper}>
//             <button className={s.btnChevron} name="decrement" onClick={onClick}>
//               <svg className={s.item_svg} width="6" height="11">
//                 <use href={`${sprite}#icon-chevronLeft`}></use>
//               </svg>
//             </button>
//             <DayPickerInput
//               formatDate={formatDate}
//               parseDate={parseDate}
//               format={moment().format('MMMM YYYY')}
//               placeholder={`${formatDate(new Date(), 'MMMM YYYY', 'uk')}`}
//               dayPickerProps={{
//                 locale: 'uk',
//                 localeUtils: MomentLocaleUtils,
//               }}
//             />
//             {/* <input
//               id="date"
//               type="month"
//               step="1"
//               value={date}
//               className={s.period}
//               readOnly={true}
//             /> */}
//             <button className={s.btnChevron} name="increment" onClick={onClick}>
//               <svg className={s.item_svg} width="6" height="11">
//                 <use href={`${sprite}#icon-chevronRight`}></use>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////

// import s from './CurrentPeriod.module.css';
// import { useDispatch } from 'react-redux';
// import 'react-datepicker/dist/react-datepicker.css';
// import React, { useState } from 'react';
// import sprite from '../../sprite.svg';
// import { getReportThunk } from '../../redux/reports/thunk';

// export default function CurrentPeriod() {
//   const dispatch = useDispatch();

//   const initialDate = new Date();
//   const year = initialDate.getFullYear();
//   const month = initialDate.getMonth();
//   const modDate = `${year}-0${month + 1}`;

//   const [date, setDate] = useState(modDate);

//   const getReport = (month, year) => {
//     const params = { year: year, month: month };
//     dispatch(getReportThunk(params));
//   };

//   const onClick = e => {
//     const input = document.getElementById('date');

//     switch (e.currentTarget.name) {
//       case 'increment':
//         input.stepUp(1);
//         break;
//       case 'decrement':
//         input.stepDown(1);
//         break;
//       default:
//         break;
//     }
//     setDate(input.value);
//     const month = input.value.substring(5);
//     const year = input.value.substring(0, 4);
//     getReport(Number(month) - 1, year);
//   };

//   return (
//     <div className={s.containerCurrentPeriod}>
//       <div>
//         <p className={s.CurrentPeriodTitle}>Поточний період:</p>
//         <div className={s.selectorWrapper}>
//           <button className={s.btnChevron} name="decrement" onClick={onClick}>
//             <svg className={s.item_svg} width="6" height="11">
//               <use href={`${sprite}#icon-chevronLeft`}></use>
//             </svg>
//           </button>
//           <input
//             id="date"
//             type="month"
//             step="1"
//             value={date}
//             className={s.period}
//             readOnly={true}
//           />
//           <button className={s.btnChevron} name="increment" onClick={onClick}>
//             <svg className={s.item_svg} width="6" height="11">
//               <use href={`${sprite}#icon-chevronRight`}></use>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
