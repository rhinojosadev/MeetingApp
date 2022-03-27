import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export const useDashboard = () => {  
    let navigate = useNavigate();

    const handleClick = useCallback((e) => {
        let value = e.target.outerText;
        let countClicks = e.detail;
        switch (countClicks) {
            case 1:
                //show meeting popup
                break;
            case 2:
                navigate(`/schedule/${value}`);
                break;
            default:
                break; 
        }
    }, [navigate]);


    return {
        handleClick
    }
}