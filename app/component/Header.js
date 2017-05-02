import React, { Component } from 'react';
import LoadingIndicator from './LoadingIndicator';
import { StyleSheet, Text, View } from 'react-native';
class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    isFetching: React.PropTypes.bool
  };

  render() {
    const { title, isFetching } = this.props;

    return (
      <View style={ styles.view }> 
        <Text style={ styles.title }>{ title }</Text>
        <LoadingIndicator isLoading={ isFetching } style={styles.loadingIndicator }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    flexDirection: 'row', 
    marginTop: 20 
  },
  title: {
    flex: 1
  },
  loadingIndicator: {
    width: 50
  }
});

export default Header;