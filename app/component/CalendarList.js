import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EventList from './EventList';

const renderCalendars = (calendars) => {
  return calendars.map((calendar) => {
    return (<Text key={ calendar.id }>{calendar.source }: { calendar.title} </Text>);
  }, []);
}

const renderError = (error) => {
  if (error) {
    return (
      <View style={ styles.error }>
        <Text>Error</Text>
        <Text>{ error }</Text>
      </View>
    );
  }
}

class CalendarList extends Component {
  static propTypes = {
    events: React.PropTypes.array,
    calendars: React.PropTypes.array,
    error: React.PropTypes.string
  }

  render() {
    const events = this.props.events || [];
    const calendars = this.props.calendars || [];
    const calendarEls = renderCalendars(calendars);
    const error = renderError(this.props.error);

    return (
      <EventList events={ events } />
    );
  }
}

const styles = StyleSheet.create({});

export default CalendarList;