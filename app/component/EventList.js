import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { getDateFormat, getTimeFormat, isSameDay } from '../utils/Dates';

const groupEvents = (events) => {
    events = events || [];
    return events.reverse().reduce((groupedEvents, event, idx, allEvents) => {
      const dayFormatted = getDateFormat(event.startDate);
      const timeFormatted = getTimeFormat(event.startDate);
      if (groupedEvents.length === 0 ||
          !isSameDay(event.startDate, allEvents[idx-1].startDate)) {
        const groupHeader = (
          <View key={ groupedEvents.length } style={ styles.groupView }>
            <Text style={ styles.groupDate }>
              { dayFormatted }
            </Text>
          </View>
        );
        groupedEvents.push(groupHeader);
      } 
      const eventRow = (
        <View key={ groupedEvents.length } style={ styles.eventView }>
          <Text style={ styles.nameRow }>
            { timeFormatted } - { event.title }
          </Text>
        </View>
      );
      groupedEvents.push(eventRow);
      return groupedEvents;
    }, []);
  }

class EventList extends Component {
  static propTypes = {
    events: React.PropTypes.array
  }

  render() {
    //TODO: groupEvents in reducer, so only when events change
    const groupedEvents = groupEvents(this.props.events);
    return (
      <View>
        <Text style={ styles.eventTitle }>Past Events</Text>
        <ScrollView style={ styles.eventList }>
          { groupedEvents }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventTitle: {
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: 'green',
    fontSize: 20
  },
  groupView: {
    backgroundColor: '#ffca99',
  },
  groupDate: {
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 20,
    color: 'black'
  }
});

export default EventList;