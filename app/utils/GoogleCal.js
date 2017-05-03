
export const getEvents = (dateFrom, dateTo) => {
  let events = [];
  events.push({
    name: 'Event #1',
    date: '2017-02-08 09:30-07'
  });
  events.push({
    name: 'Event #2',
    date: '2017-02-08 10:30-07'
  });
  events.push({
    name: 'Event #3',
    date: '2017-02-09 09:30-07'
  });
  return events;
}