import { 
  ERROR_ENCOUNTERED, 
  REQUEST_CALENDAR_DATA, 
  CALENDARS_RECEIVED, 
  CALENDAR_EVENTS_RECEIVED,
} from '../utils/Constants';
import RNCalendarEvents from 'react-native-calendar-events';
import { getPreviousMonth } from '../utils/Dates';
import { mockEvents } from './__unit__/mock';

export function fetchCalendars() {
  return (dispatch, getState) => {
    RNCalendarEvents.findCalendars().then(calendars => {
      dispatch(calendarsReceived(calendars));
      //TODO find by ID based on Settings
      const defaultCalendarName = getState().calendarName;
      if (defaultCalendarName) {
        const calendar = calendars.find(calendar => calendar.title === defaultCalendarName);
        fetchEvents(calendar, getPreviousMonth(), new Date(), dispatch);
      } else {
        //take them to settings to set default calendar
      }
    }).catch(error => {
      dispatch(errorEncountered(error));
    });
  }
}

export function fetchEvents(calendar, fromDate, toDate, dispatch) {
  dispatch(eventsReceived(mockEvents()));
  // RNCalendarEvents.fetchAllEvents(fromDate, toDate, [calendar.id])
  //   .then(events => {
  //     dispatch(eventsReceived(events));
  //   }).catch(error => errorEncountered(error));
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

export function eventsReceived(events) {
  return {
    type: CALENDAR_EVENTS_RECEIVED,
    payload: {
      events
    }
  }
}