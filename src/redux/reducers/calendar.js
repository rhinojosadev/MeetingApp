import {
  ADD_CALENDAR
} from '../actions/calendar';

const initState = {
    meetings: [], 
}

export default function calendar(state=initState, action) {
    switch (action.type) {
      case ADD_CALENDAR:
        return {
                ...state,
                meetings: [ ...state.meetings, { [action.payload.id]: action.payload }  ]
              };
      default:
        return state;
    }
}