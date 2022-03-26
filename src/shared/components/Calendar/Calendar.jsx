import styles from './index.module.css';

export const Calendar = ({ onClick }) => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 ,28
                  , 29, 30, 31, 0, 0, 0, 0];
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

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
                                <li tabIndex={0} className={styles.calendar__day} onClick={onClick} >
                                    <span className={styles.calendar__day_digit}> { value } </span>
                               
                                </li>
         
                                )
                            }
                            {value === 0 && (
                                <li aria-hidden="true" tabIndex={0} className={styles.calendar__day_empty} >
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