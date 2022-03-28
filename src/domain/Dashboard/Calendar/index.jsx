import styles from './index.module.css';

import { useCalendar } from './hooks/useCalendar';
import { Popup } from './Popup';

export const Calendar = ({ onClick, reservedDates, calendar }) => {
    const { 
        days, 
        weekDay,
        hasReservedDate
    } = useCalendar();

    return (
        <>
         <section aria-label="Calendar Widget" className={styles.calendar__wrapper}>
             <div className={styles.calendar__header}>
                <h3>March 2022</h3>
             </div>

             <ul className={styles.calendar__week}>
                 {weekDay.map( (day) => {
                     return(
                         <>
                            <li className={styles.calendar__weekday} >
                                <span aria-label={day} tabIndex={0}>{day.substring(0,3)}</span>
                            </li>
                         </>
                     )
                 }) }
             </ul>
             <ul className={styles.calendar__wrapper_days}>
                 {days.map((value) => {
                     return(
                         <>
                            {value > 0 && (
                                <li tabIndex={0} className={styles.calendar__day} onClick={(e) => onClick(e, calendar, value)} >
                                        <span className={styles.calendar__day_digit}> { value } 
                                        </span>
                                        {hasReservedDate(reservedDates, value) && (
                                            <>
                                                <span className={styles.calendar__day_circle}></span> 
                                                <Popup day={value} calendar={calendar}  />
                                            </>
                                        )}     
                                </li>           
                                )
                            }
                            {value === 0 && (
                                <li aria-hidden="true" className={styles.calendar__day_empty} >
                                </li>
                            )}
                         </>
                     )
                 })} 
             </ul>
         </section>
        </>
    )
}