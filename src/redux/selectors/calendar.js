import { useSelector } from 'react-redux'

export const useGetCalendar = () => {
   return useSelector(state => state.calendar);
} 

export const getReservedDates = (meetings) => {
    /*
    id: 26 
    attendees: "t"
    date: "2022-03-26"
    description: "t"
    name: "t"
    */
}