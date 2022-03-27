export const ADD_CALENDAR = 'calendar/add';
export const UPDATE_CALENDAR = 'calendar/update';

export const addCalendar = (items, dispatch) => {
    const id = items.date.split('-')[2];

    dispatch({
        type: ADD_CALENDAR,
        payload: { ...items, id  }
    });
};

export const updateCalendar = (items, dispatch) => {
    dispatch({
        type: UPDATE_CALENDAR,
        payload: { ...items }
    });
}
