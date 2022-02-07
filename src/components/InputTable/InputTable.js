import s from './InputTable.module.css'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import React, { useState, forwardRef} from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";



const InputTable = () => {
  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);


const data = {
    date: format(new Date(date), 'yyyy-MM-dd'),
    };
    
    const CustomDate = forwardRef(({ value, onClick }, ref) => (
        <button className={s.dateBtn} onClick={onClick} ref={ref}>
            <div className={s.date}>
                <EventOutlinedIcon className={s.icon} />
                {value}
            </div>
        </button>
        
    ));
    
    console.log(data)
    return (
        <div className={s.inputContainer}>
            <div className={s.inputShell}>
                <div className={s.datepieckerWrapper}>
                    <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        dateFormat="dd.MM.yyyy"
                        todayButton="Сьогодні"
                        customInput={<CustomDate />}
                    />
                </div>
                <form className={s.inputForm}>
                    <input
                        className={s.productName}
                        placeholder="Опис товару"
                        name="name"
                        type="text"
                    >
                    </input>
                    <label className={s.productAmountLabel}>
                        <input className={s.productAmount} name ="value" type = "text" autoComplete="off" ></input>
                    </label>
                </form> 

            </div>
            <div>
                <button className={`${s.changeBtn}, ${s.mainBtn}`} type = 'submit'>Ввести</button>
                <button className={s.changeBtn} type = 'submit'>Очистити</button>
            </div>

        </div>
    )
}

export default InputTable