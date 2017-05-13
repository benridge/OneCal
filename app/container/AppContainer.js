import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import CalendarContainer from './CalendarContainer';
import TabbedApp from '../component/TabbedApp';
import RNCalendarEvents from 'react-native-calendar-events';
import { View } from 'react-native';
import { fetchEvents, fetchCalendars, errorEncountered } from '../action/CalendarActions';
import { connect } from 'react-redux';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    RNCalendarEvents.authorizeEventStore().then(status => {
      this.getCalendarData();
    }).catch(error => {
      this.props.errorEncountered(error);
    });
  }

  getCalendarData() {
    this.props.fetchCalendars();
  }

  render() {
    return (
      <TabbedApp />
    );
  }
}

const mapDispatchToProps = {
  fetchEvents,
  fetchCalendars,
  errorEncountered
}

export default connect(null, mapDispatchToProps)(AppContainer);