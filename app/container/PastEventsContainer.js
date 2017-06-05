import React, { Component } from 'react';
import EventList from '../component/EventList';
import { connect } from 'react-redux';

class PastEventsContainer extends Component {
  static propTypes = {
    events: React.PropTypes.array
  }  

  render() {
    return (
      <EventList events={ this.props.events } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(PastEventsContainer);