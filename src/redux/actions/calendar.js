export const ADD_CALENDAR = 'calendar/add';
export const UPDATE_CALENDAR = 'calendar/update';

export const addCalendar = (items, dispatch) => {
    const id = parseInt(items.date.split('-')[2]).toString();
    const displayPopup = false;

    dispatch({
        type: ADD_CALENDAR,
        payload: { ...items, id, displayPopup }
    });
};

export const updateCalendar = (items, dispatch) => {
    dispatch({
        type: UPDATE_CALENDAR,
        payload: { ...items }
    });
}
