import { REQUEST_CALENDAR_DATA } from '../utils/Constants';
import { createReducer } from '../utils/Reducers';

const calendarRequested = (state, action) => {
  return state.set('isFetching', true);
};

const initialState = {
  title: 'initial Title',
  isFetching: false
}
export const calendarState = createReducer(initialState, {
    REQUEST_CALENDAR_DATA: calendarRequested
  }
);