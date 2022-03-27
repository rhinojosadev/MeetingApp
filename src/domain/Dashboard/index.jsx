import { useEffect } from 'react';

import { Calendar } from '../../shared/components';
import { Home } from '../../layouts/index';
import { useDashboard } from './hook';
import { useGetCalendar } from '../../redux/selectors/calendar';


export const Dashboard = () => { 
    const { handleClick } = useDashboard();
    const calendar = useGetCalendar();
    const reservedDates = [];

    useEffect(() => {
        console.log(calendar);
    }, [calendar]);

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