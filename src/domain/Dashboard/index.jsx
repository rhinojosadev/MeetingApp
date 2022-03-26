import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { Calendar } from '../../shared/components';


export const Dashboard = () => { 

    let navigate = useNavigate();

    const handleClick = useCallback((e) => {
        let value = e.target.outerText;
        navigate(`/schedule/${value}`);
    }, [navigate]);

    return (
        <>
            <h1>Dashboard</h1>          
            <Calendar 
                onClick={handleClick}
            />
        </>
    )
 }