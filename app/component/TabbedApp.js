import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import { addCalendarIcon } from '../utils/Icons';
import AddCalendarContainer from '../container/AddCalendarContainer';
import SettingsContainer from '../container/SettingsContainer';

class TabbedApp extends Component {
  state = {
    selectedTab: 'addEventTab',
  };

  _renderCalendar() {
    return (
      <AddCalendarContainer />
    )
  }

  _renderSettings() {
    return (
      <SettingsContainer />
    )
  }

  render() {
    return (
      <TabBarIOS unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
            title="Add Event"
            icon={{uri: addCalendarIcon, scale: 3}}
            selected={this.state.selectedTab === 'addEventTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'addEventTab',
              });
            }}>
            {this._renderCalendar()}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Settings"
            icon={{uri: addCalendarIcon, scale: 3}}
            selected={this.state.selectedTab === 'settingsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'settingsTab',
              });
            }}>
            {this._renderSettings()}
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default TabbedApp;