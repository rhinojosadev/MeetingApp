import { useSelector } from 'react-redux'

export const useGetCalendar = () => {
   return useSelector(state => state.calendar);
} 

export const getCalendarById = (state, id) => {
   const meeting = state.meetings.filter( meeting => meeting[id])[0];
   return meeting ? Object.values(meeting)[0] : null;
}

export const getReservedDates = (obj) => {
    return obj.map((item) => { return Object.keys(item) })
            .toLocaleString()
            .split(',');
}