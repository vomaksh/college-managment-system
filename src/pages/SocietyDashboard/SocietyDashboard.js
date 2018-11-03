import React, { Component } from 'react'
import SocietyHeader from '../../components/societyHeader/SocietyHeader';
import SendSocietyAnnouncement from '../../components/sendSocietyAnnouncement/SendSocietyAnnouncement';
import "./SocietyDashboard.css"
import SocietyDashboardContentArea from '../../components/societyDashboardContentArea/SocietyDashboardContentArea';

export default class SocietyDashboard extends Component {
  render() {
    return (
      <div className="societyDashboard">
        <SocietyHeader />
        <div className="container" style={{
          height: "100%"
        }}>
          <SocietyDashboardContentArea />
        </div>
      </div>
    )
  }
}
