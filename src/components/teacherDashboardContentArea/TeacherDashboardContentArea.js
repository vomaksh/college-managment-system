import React, { Component } from 'react'
import SendTabTeacherDashboard from '../sendTabTeacherDashboard/SendTabTeacherDashboard';
import LibrarySearch from '../librarySearch/LibrarySearch';
import Forum from "../forum/Forum";
import StationaryMarket from "../stationaryMarket/StationaryMarket"

export default class TeacherDashboardContentArea extends Component {
  render() {
    return (
      <div>
        <div id="send" class="col s12">
          <SendTabTeacherDashboard />
        </div>
        <div id="announcements" class="col s12">
          <Forum />
        </div>
        <div id="library" class="col s12">
          <LibrarySearch />
        </div>
        <div id="marketplace" class="col s12">
          <StationaryMarket />
        </div>
      </div>
    )
  }
}
