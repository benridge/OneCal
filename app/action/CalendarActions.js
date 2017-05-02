import { REQUEST_CALENDAR_DATA } from '../utils/Constants';

export function requestCalendarData(payload) {
  return {
    type: REQUEST_CALENDAR_DATA,
    payload
  };
}