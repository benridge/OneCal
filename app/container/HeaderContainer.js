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
  const title = state.title;
  const isFetching = state.isFetching;

  return {
    title,
    isFetching
  };
}

export default connect(mapStateToProps)(HeaderContainer);