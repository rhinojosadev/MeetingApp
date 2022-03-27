import {
  ADD_CALENDAR,
  UPDATE_CALENDAR,
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
      case UPDATE_CALENDAR:
        const stateMeeting = Object.values(state.meetings.filter( meeting => meeting[action.payload.id])[0])[0];
        const index = state.meetings.map( (meeting) => Object.keys(meeting) ).toLocaleString().split(',').indexOf(action.payload.id);
        const updatedObj = { ...stateMeeting, ...action.payload};
         //remove previous
        state.meetings.splice(index, 1);
        return  {
                ...state,
                meetings: [ ...state.meetings,  { [updatedObj.id]: updatedObj }  ]
              };
      default:
        return state;
    }
}