import React from 'react';
import { getDateFormat, getTimeFormat, isSameDay } from '../utils/Dates';
import { StyleSheet, Text, View } from 'react-native';

export const groupEvents = (events, styles) => {
  events = events || [];
  return events.reduce((groupedEvents, event, idx, allEvents) => {
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