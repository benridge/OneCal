import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { groupEvents } from '../utils/Events';


class CalendarList extends Component {
  static propTypes = {
    events: React.PropTypes.array
  }

  render() {
    const events = this.props.events || [];
    eventEls = groupEvents(events, styles);

    return (
      <View style={ styles.view }>
        { eventEls }
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CalendarList;