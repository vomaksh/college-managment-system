import React, { Component } from 'react'
import TimeTableEnhanced from '../timeTable/TimeTableEnhanced';
import Announcement from '../forum/Forum';
import Attendance from '../attendance/Attendance';
import LibrarySearch from "../librarySearch/LibrarySearch";
import StationaryMarket from '../stationaryMarket/StationaryMarket';

export default class DashboardContentArea extends Component {
  render() {
    return (
      <div>
        <div id="timeTable" class="container col s12">
          <TimeTableEnhanced />
        </div>
        <div id="announcements" class="container col s12">
          <Announcement />
        </div>
        <div id="attendance" class="col s12">
          <Attendance />
        </div>
        <div id="libraryBooks" class="container col s12">
          <LibrarySearch />
        </div>
        <div id="stationaryMarketplace" class="container col s12">
          <StationaryMarket />
        </div>
      </div>
    )
  }
}
