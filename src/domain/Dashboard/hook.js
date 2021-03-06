import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { useCalendar } from './Calendar/hooks/useCalendar';
import { updateCalendar } from '../../redux/actions/calendar';


export const useDashboard = () => {  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getCalendarReservedInfo } = useCalendar();

    const handleClick = useCallback((e, calendar, day) => {
        let countClicks = e.detail;
        let currentMeeting = getCalendarReservedInfo(calendar, day);

        if (currentMeeting) {
            switch (countClicks) {
                case 1:
                    currentMeeting.displayPopup = true;
                    updateCalendar(currentMeeting, dispatch);
                    break;
                case 2:
                    currentMeeting.displayPopup = false;
                    updateCalendar(currentMeeting, dispatch);
                    navigate(`/schedule/${day}`);
                    break;
                default:
                    break; 
            }
        }

    }, [navigate, dispatch, getCalendarReservedInfo]);


    return {
        handleClick
    }
}