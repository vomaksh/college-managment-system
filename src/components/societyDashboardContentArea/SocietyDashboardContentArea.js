import React, { Component } from 'react'
import SendSocietyAnnouncement from '../sendSocietyAnnouncement/SendSocietyAnnouncement';
import Forum from '../forum/Forum';
import StationaryMarket from '../stationaryMarket/StationaryMarket';

export default class SocietyDashboardContentArea extends Component {
  render() {
    return (
      <div>
        <div id="send" class="col s12">
          <SendSocietyAnnouncement />
        </div>
        <div id="announcements" class="col s12">
          <Forum />
        </div>
        <div id="marketplace" class="col s12">
          <StationaryMarket />
        </div>
      </div>
    )
  }
}
