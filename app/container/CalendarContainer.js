import React, { Component } from 'react';
import CalendarList from '../component/CalendarList';
import { getEvents } from '../utils/GoogleCal';
import { connect } from 'react-redux';

class CalendarContainer extends Component {

  static propTypes = {
    events: React.PropTypes.array
  }  

  render() {
    return (
      <CalendarList events={ this.props.events } />
    )
  }
}

const mapStateToProps = () => {
  const events = getEvents(null, null);

  return {
    events
  };
}

export default connect(mapStateToProps)(CalendarContainer);
