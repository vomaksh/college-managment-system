import React, { Component } from 'react'
import SocietyHeader from '../../components/societyHeader/SocietyHeader';
import "./SocietyDashboard.css"
import SocietyDashboardContentArea from '../../components/societyDashboardContentArea/SocietyDashboardContentArea';

export default class SocietyDashboard extends Component {
  logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("societyId");
    this.props.history.push("/");
    window.M.toast({html: "You have been successfully logged out"});
  }
  render() {
    return (
      <div className="societyDashboard">
        <SocietyHeader logout={this.logout} />
        <div className="container" style={{
          height: "100%"
        }}>
          <SocietyDashboardContentArea />
        </div>
      </div>
    )
  }
}
