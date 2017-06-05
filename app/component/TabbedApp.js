import React, { Component } from 'react';
import { StyleSheet, TabBarIOS } from 'react-native';
import { addCalendarIcon, puzzleIcon } from '../utils/Icons';
import AddCalendarContainer from '../container/AddCalendarContainer';
import SettingsContainer from '../container/SettingsContainer';
import PastEventsContainer from '../container/PastEventsContainer';

class TabbedApp extends Component {
  state = {
    selectedTab: 'addEventTab',
  };

  _renderCalendar() {
    return <AddCalendarContainer />;
  }

  _renderSettings() {
    return <SettingsContainer />;
  }

  _renderPastEvents() {
    return <PastEventsContainer />;
  }

  render() {
    return (
      <TabBarIOS unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="gray"
        barTintColor="darkslateblue"
        style={ styles.TabBar } >
        <TabBarIOS.Item
          title="Add Event"
          icon={require('../img/addCalendar.png')}
          selected={this.state.selectedTab === 'addEventTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'addEventTab',
            });
          }}>
          { this._renderCalendar() }
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Past Events"
          icon={require('../img/calendar.png')}
          selected={this.state.selectedTab === 'pastEventsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'pastEventsTab',
            });
          }}>
          { this._renderPastEvents() }
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Settings"
          icon={{uri: puzzleIcon, scale: 3}}
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'settingsTab',
            });
          }}>
          { this._renderSettings() }
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  TabBar: {
    marginTop: 20
  }
});

export default TabbedApp;