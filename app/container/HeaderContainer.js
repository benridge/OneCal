import React, { Component } from 'react';
import Header from '../component/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    isFetching: React.PropTypes.bool
  };

  render() {
    return (
      <Header { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('HC: mapStateToProps state: ', state);
  const calendarState = state.calendarState;
  const title = calendarState.title;
  const isFetching = calendarState.isFetching;

  return {
    title,
    isFetching
  };
}

export default connect(mapStateToProps)(HeaderContainer);