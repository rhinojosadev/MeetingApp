import { Calendar } from './Calendar/index';
import { Home } from '../../layouts/index';
import { useDashboard } from './hook';
import { useGetCalendar, getReservedDates } from '../../redux/selectors/calendar';


export const Dashboard = () => { 
    const { handleClick } = useDashboard();
    const calendar = useGetCalendar();
    const reservedDates = getReservedDates(calendar.meetings);

    return (
        <>
            <Home>       
                <Calendar 
                    calendar={calendar}
                    reservedDates={reservedDates}
                    onClick={handleClick}
                />

            </Home>
        </>
    )
 }