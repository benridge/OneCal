import React, { Component } from 'react';
import CalendarList from '../component/CalendarList';
import { connect } from 'react-redux';

class CalendarContainer extends Component {
  static propTypes = {
    events: React.PropTypes.array,
    calendars: React.PropTypes.array
  }  

  render() {
    return (
      <CalendarList 
        events={ this.props.events } 
        calendars={ this.props.calendars }
        error={ this.props.error }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events, 
    calendars: state.calendars,
    error: state.error
  }
}

export default connect(mapStateToProps)(CalendarContainer);
