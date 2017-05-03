import Moment from 'moment';

export const isSameDay = (date1, date2) => {
  if (!date1 || !date2) {
    return true;
  }
  const moment1 = Moment(date1);
  const moment2 = Moment(date2);

  return moment1.year() === moment2.year() &&
    moment1.dayOfYear() === moment2.dayOfYear();
} 

export const getDateFormat = (dateString) => {
  const moment = Moment(dateString);

  return moment.format('LL');
} 

export const getTimeFormat = (dateString) => {
  const moment = Moment(dateString);

  return moment.format('LT');
}