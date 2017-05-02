import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoadingIndicator extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool
  };

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return null;
  }
}

export default LoadingIndicator;