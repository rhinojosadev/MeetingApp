export const ADD_CALENDAR = 'calendar/add';

export const addCalendar = (items, dispatch) => {
    const id = items.date.split('-')[2];

    dispatch({
        type: ADD_CALENDAR,
        payload: { ...items, id  }
    });
};
