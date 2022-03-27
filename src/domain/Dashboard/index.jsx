import { Calendar } from '../../shared/components';
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
                <h1>Dashboard</h1>          
                <Calendar 
                    reservedDates={reservedDates}
                    onClick={handleClick}
                />
            </Home>
        </>
    )
 }