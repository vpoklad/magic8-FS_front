// import s from './CurrentPeriod.module.css';

// import DatePicker from 'react-datepicker';
// import { uk } from 'date-fns/locale';
// import 'react-datepicker/dist/react-datepicker.css';
// import React, { useState, forwardRef } from 'react';
// import sprite from '../../sprite.svg';

// export default function CurrentPeriod() {
//   const initialDate = new Date();
//   console.log(initialDate);
//   const [date, setDate] = useState(initialDate);
//   // const date = new Date();
//   // const year = date.getFullYear();
//   // const month = date.getMonth();
//   // const value = `${year}-0${month}`;

//   // const locale = Locale();

//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const value = `${year}-0${month}`;

//   console.log();
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

//     console.log(input);
//   };

//   // const CustomDate = forwardRef(({ value, onClick }, ref) => (
//   //   <button className={s.dateBtn} onClick={onClick} ref={ref}>
//   //     <div className={s.date}>{value}</div>
//   //   </button>
//   // ));

//   return (
//     <div className={s.containerCurrentPeriod}>
//       <div>
//         <p className={s.CurrentPeriodTitle}>Поточний період</p>
//         <div className={s.selectorWrapper}>
//           <button className={s.btnChevron} name="decrement" onClick={onClick}>
//             <svg className={s.item_svg} width="6" height="11">
//               <use href={`${sprite}#icon-chevronLeft`}></use>
//             </svg>
//           </button>
//           {/* <DatePicker
//             selected={date}
//             locale={uk}
//             onChange={date => setDate(date)}
//             dateFormat="MMMM yyyy"
//             // customInput={<CustomDate />}
//             readOnly="true"
//             sshowMonthYearPicker
//             showFullMonthYearPicker
//           /> */}
//           <input
//             id="date"
//             type="month"
//             step="1"
//             value={value}
//             className={s.period}
//             readonly="true"
//           />

//           {/* <p className={s.period}>МІСЯЦЬ 2022</p> */}
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

import { useState } from 'react';
// import { set } from 'date-fns';
import sprite from '../../sprite.svg';
import s from './CurrentPeriod.module.css';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

export default function CurrentPeriod() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const value = `${year}-0${month}`;

  const onClick = e => {
    const input = document.getElementById('date');

    switch (e.currentTarget.name) {
      case 'increment':
        input.stepUp(1);
        break;
      case 'decrement':
        input.setepDoen(-1);
        break;
      default:
        break;
    }

    console.log(input);
  };

  return (
    <div className={s.containerCurrentPeriod}>
      <div>
        <p className={s.CurrentPeriodTitle}>Поточний період</p>
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
            value={value}
            className={s.period}
            readonly="true"
          />

          {/* <p className={s.period}>МІСЯЦЬ 2022</p> */}
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
