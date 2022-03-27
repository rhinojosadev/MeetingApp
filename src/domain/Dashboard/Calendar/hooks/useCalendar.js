
import { getCalendarById } from "../../../../redux/selectors/calendar";

export const useCalendar = () => {  
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 ,28
        , 29, 30, 31, 0, 0, 0, 0];
        
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

    const hasReservedDate = (reservedDate, value) => {
        return reservedDate.includes(value.toString());
    }

    const getCalendarReservedInfo = (calendar, id) => {
       return getCalendarById(calendar, parseInt(id,10));
    }


    return {
        days,
        weekDay,
        hasReservedDate,
        getCalendarReservedInfo
    }
} 