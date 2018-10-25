import React, { Component } from 'react'
import "./Dashboard.css"
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import DashboardContentArea from '../../components/dashboardContentArea/DashboardContentArea';

export default class Dashboard extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  render() {
    return (
      <div>
        <DashboardHeader />
        <DashboardContentArea />
      </div>
    )
  }
}
