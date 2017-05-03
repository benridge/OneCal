import React from 'react';
import { getDateFormat, getTimeFormat, isSameDay } from '../utils/Dates';
import { StyleSheet, Text, View } from 'react-native';

export const groupEvents = (events, styles) => {
  events = events || [];
  return events.reduce((groupedEvents, event, idx, allEvents) => {
    const dayFormatted = getDateFormat(event.date);
    const timeFormatted = getTimeFormat(event.date);
    if (groupedEvents.length === 0 ||
        !isSameDay(event.date, allEvents[idx-1].date)) {
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
        <Text style={ styles.eventTime }>
          { timeFormatted }
        </Text>
        <Text style={ styles.eventName }>
          { event.name }
        </Text>
      </View>
    );
    groupedEvents.push(eventRow);
    return groupedEvents;
  }, []);
}