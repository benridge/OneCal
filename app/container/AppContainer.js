import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import CalendarContainer from './CalendarContainer';
import { View } from 'react-native';

class AppContainer extends Component {
  render() {
    return (
      <View>
        <HeaderContainer />
        <CalendarContainer />
      </View>
    );
  }
}

export default AppContainer;