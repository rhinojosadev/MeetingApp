import { useSelector } from 'react-redux'

export const useGetCalendar = () => {
   return useSelector(state => state.calendar);
} 

export const getReservedDates = (obj) => {
    return obj.map((item) => { return Object.keys(item) })
            .toLocaleString()
            .split(',');
}