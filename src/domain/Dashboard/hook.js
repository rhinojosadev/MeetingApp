import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export const useDashboard = () => {  
    let navigate = useNavigate();

    const handleClick = useCallback((e) => {
        let value = e.target.outerText;
        navigate(`/schedule/${value}`);
    }, [navigate]);


    return {
        handleClick
    }
}