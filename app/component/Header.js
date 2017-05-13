import React, { Component } from 'react';
import LoadingIndicator from './LoadingIndicator';
import { StyleSheet, Text, View } from 'react-native';
class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    isFetching: React.PropTypes.bool
  };

  renderLoadingIndicator() {
    const { isFetching } = this.props;
    if (isFetching) {
      return <LoadingIndicator isLoading={ isFetching } style={ styles.loadingIndicator } />;
    }
  }

  render() {
    const { title, isFetching } = this.props;
    const loadingIndicator = this.renderLoadingIndicator();
    return (
      <View style={ styles.headerView }> 
        <Text style={ styles.headerTitle }>{ title }</Text>
        { loadingIndicator }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    display: 'flex', 
    flexDirection: 'row', 
    marginTop: 20,
    backgroundColor: 'black',
  },
  headerTitle: {
    marginTop: 3,
    marginBottom: 3,
    flex: 1, 
    fontSize: 20,
    textAlign: 'center',
    color: 'white' 
  },
  loadingIndicator: {
    width: 50
  }
});

export default Header;