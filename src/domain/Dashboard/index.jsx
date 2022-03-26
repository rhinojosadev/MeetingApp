
import { Calendar } from '../../shared/components';
import { Home } from '../../layouts/index';
import { useDashboard } from './hook';

export const Dashboard = () => { 

    const { handleClick } = useDashboard();

    return (
        <>
            <Home>
                <h1>Dashboard</h1>          
                <Calendar 
                    onClick={handleClick}
                />
            </Home>
        </>
    )
 }