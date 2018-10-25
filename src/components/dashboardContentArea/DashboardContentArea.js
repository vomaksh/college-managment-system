import React, { Component } from 'react'
import TimeTable from '../timeTable/TimeTable';
import TimeTableEnhanced from '../timeTable/TimeTableEnhanced';

export default class DashboardContentArea extends Component {
  render() {
    return (
      <div>
        <div id="timeTable" class="container col s12">
          <TimeTableEnhanced />
        </div>
        <div id="announcements" class="container col s12">
          announcements
        </div>
        <div id="attendance" class="container col s12">
          attendance
        </div>
        <div id="libraryBooks" class="container col s12">
          library
        </div>
      </div>
    )
  }
}
