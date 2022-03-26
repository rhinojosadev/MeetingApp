import styles from './index.module.css';

export const Calendar = () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 ,28
                  , 29, 30, 31, 0, 0, 0, 0]

    return (
        <>
         <div className={styles.calendar__wrapper}>
             <div className={styles.calendar__header}>
                <span>March 2022</span>
             </div>
             <div className={styles.calendar__week}>
                <span className={styles.calendar__weekday}>Sun</span>
                <span className={styles.calendar__weekday}>Mon</span>
                <span className={styles.calendar__weekday}>Tue</span>
                <span className={styles.calendar__weekday}>Wed</span>
                <span className={styles.calendar__weekday}>Thu</span>
                <span className={styles.calendar__weekday}>Frid</span>
                <span className={styles.calendar__weekday}>Sat</span>
             </div>
             <div className={styles.calendar__wrapper_days}>
                 {days.map((value, index) => {
                     return(
                         <>
                        {value > 0 && (
                            <span className={styles.calendar__day} key={index}>
                                {value }
                            </span> 
                            )
                        }
                         {value === 0 && (
                            <span className={styles.calendar__day_empty} key={index}>
                            </span> 
                         )}
                         </>
                     )
                 })} 
             </div>

         </div>
        </>
    )
}