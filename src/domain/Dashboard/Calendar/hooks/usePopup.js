import { useState } from 'react';
import { useDispatch } from 'react-redux'

import { useCalendar } from './useCalendar';
import { updateCalendar } from '../../../../redux/actions/calendar';

export const usePopup = () => {
    const dispatch = useDispatch();
    const { getCalendarReservedInfo } = useCalendar();
    const [popUpInfo, setPopUpInfo] = useState(null);
    
    const handlePopUpClose = (e, info) => {
        info.displayPopup = false;
        updateCalendar(info, dispatch);
        setPopUpInfo(null);
    }

    const getCurrentPopUpValue = (calendar, value) => {
        let currentPopUpInfo = getCalendarReservedInfo(calendar, value);
        if (currentPopUpInfo) {
            setPopUpInfo(currentPopUpInfo);
            return true;
        } else {
            return false;
        }
    }


    return {
        handlePopUpClose,
        getCurrentPopUpValue,
        popUpInfo
    }
}