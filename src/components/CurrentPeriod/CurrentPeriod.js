import s from './CurrentPeriod.module.css';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import sprite from '../../sprite.svg';
import { getReportThunk } from '../../redux/reports/thunk';

export default function CurrentPeriod() {
  // const dispatch = useDispatch();

  // const initialDate = new Date();
  // const year = initialDate.getFullYear();
  // const month = initialDate.getMonth();
  // const modDate = `${year}-0${month + 1}`;

  // const [date, setDate] = useState(modDate);

  // const getReport = (month, year) => {
  //   const params = { year: year, month: month };
  //   dispatch(getReportThunk(params));
  // };

  // const onClick = e => {
  //   const input = document.getElementById('date');

  //   switch (e.currentTarget.name) {
  //     case 'increment':
  //       input.stepUp(1);
  //       break;
  //     case 'decrement':
  //       input.stepDown(1);
  //       break;
  //     default:
  //       break;
  //   }
  //   setDate(input.value);
  //   const month = input.value.substring(5);
  //   const year = input.value.substring(0, 4);
  //   getReport(Number(month) - 1, year);
  // };

  return (
    <div className={s.containerCurrentPeriod}>
      <div>
        <p className={s.CurrentPeriodTitle}>Поточний період:</p>
        <div className={s.selectorWrapper}>
          <button className={s.btnChevron} name="decrement" onClick={onClick}>
            <svg className={s.item_svg} width="6" height="11">
              <use href={`${sprite}#icon-chevronLeft`}></use>
            </svg>
          </button>
          <input
            id="date"
            type="month"
            step="1"
            value={date}
            className={s.period}
            readOnly={true}
          />
          <button className={s.btnChevron} name="increment" onClick={onClick}>
            <svg className={s.item_svg} width="6" height="11">
              <use href={`${sprite}#icon-chevronRight`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

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
