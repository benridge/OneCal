import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import LoadingIndicator from '../component/LoadingIndicator';

class AppContainer extends Component {
  
  static propTypes = {
    title: React.PropTypes.string,
    isFetching: React.PropTypes.bool
  };
  
  render() {
    const { title, isFetching } = this.props;
    console.log('AppContainer props', this.props);
    return (
      <View style={{ marginTop: 20 }}> 
        <Text>{ title }</Text>
        <LoadingIndicator isLoading={ isFetching } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps state: ', state);
  const calendarState = state.calendarState;
  const title = calendarState.title;
  const isFetching = calendarState.isFetching;

  return {
    title,
    isFetching
  };
}

export default connect(mapStateToProps)(AppContainer);