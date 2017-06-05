import { 
  ERROR_ENCOUNTERED,
  REQUEST_CALENDAR_DATA, 
  CALENDAR_EVENTS_RECEIVED, 
  CALENDARS_RECEIVED,
} from '../utils/Constants';
import { createReducer } from '../utils/Reducers';

const calendarRequested = (state, action) => {
  return Object.assign({}, state, {isFetching: true});
};

const setCalendarEvents = (state, action) => {
  return Object.assign({}, state, {
    events: action.payload.events,
    isFetching: false
  });
}

const setCalendars = (state, action) => {
  return Object.assign({}, state, {
    calendars: action.payload.calendars,
    eventsIsStale: true
  });
}

const errorEncountered = (state, action) => {
  const error = action.payload.error;
  return Object.assign({}, state, {
    error: error.toString()
  });
};

const initialState = {
  title: 'initial Title',
  isFetching: false
}
export default createReducer(initialState, {
    REQUEST_CALENDAR_DATA: calendarRequested,
    CALENDAR_EVENTS_RECEIVED: setCalendarEvents,
    CALENDARS_RECEIVED: setCalendars,
    ERROR_ENCOUNTERED: errorEncountered
  }
);

