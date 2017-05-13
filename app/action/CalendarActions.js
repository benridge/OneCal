import { 
  ERROR_ENCOUNTERED, 
  REQUEST_CALENDAR_DATA, 
  CALENDARS_RECEIVED, 
  SET_CALENDAR_EVENTS 
} from '../utils/Constants';
import { getEvents } from '../utils/GoogleCal';
import RNCalendarEvents from 'react-native-calendar-events';
import { getPreviousMonth } from '../utils/Dates';

export function fetchCalendars() {
  return (dispatch, getState) => {
    RNCalendarEvents.findCalendars().then(calendars => {
      dispatch(calendarsReceived(calendars));
      //TODO find by ID based on Settings
      const defaultCalendarName = getState().calendarName;
      if (defaultCalendarName) {
        const calendar = calendars.find(calendar => calendar.title === defaultCalendarName);
        fetchEvents(calendar, getPreviousMonth(), new Date())(dispatch, getState);
      }
    }).catch(error => {
      dispatch(errorEncountered(error));
    });
  }
}

export function fetchEvents(calendar, fromDate, toDate) {
  return (dispatch, getState) => {
    //const events = getEvents(fromDate, toDate);
    RNCalendarEvents.fetchAllEvents(fromDate, toDate, [calendar.id])
      .then(events => {
        dispatch(setEvents(events));
      }).catch(error => errorEncountered(error));
  };
}

//ACTION CREATORS

export function requestCalendarData(payload) {
  return {
    type: REQUEST_CALENDAR_DATA,
    payload
  };
}

export function calendarsReceived(calendars) {
  return { 
    type: CALENDARS_RECEIVED,
    payload: {
      calendars
    }
  }
}

export function errorEncountered(error) {
  return {
    type: ERROR_ENCOUNTERED,
    payload: {
      error
    }
  }
}

export function setEvents(events) {
  return {
    type: SET_CALENDAR_EVENTS,
    payload: {
      events
    }
  }
}