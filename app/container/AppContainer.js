import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import CalendarContainer from './CalendarContainer';
import RNCalendarEvents from 'react-native-calendar-events';
import { View, TabBarIOS } from 'react-native';
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
      <View>
        <HeaderContainer />
        <CalendarContainer />
      </View>
    );
  }
}

const mapDispatchToProps = {
  fetchEvents,
  fetchCalendars,
  errorEncountered
}

export default connect(null, mapDispatchToProps)(AppContainer);