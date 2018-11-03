import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DashboardHeader extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = window.M.Dropdown.init(elems, {
        coverTrigger: false
      });
    });
  }
  render() {
    return (
      <div>
        <ul id="dropdown1" class="dropdown-content">
          <li onClick={this.props.logout}><a>Logout</a></li>
        </ul>
        <nav class="nav-extended black">
          <div class="container nav-wrapper">
            <a href="#" class="brand-logo">VOMAkSh</a>
            <ul class="right">
              <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons">more_vert</i></a></li>
            </ul>
          </div>
          <div class="container">
            <ul class="tabs tabs-transparent tabs-fixed-width">
              <li class="tab"><a href="#timeTable" class="active"><i class="fas fa-clock"></i>&nbsp;<span className="hide-on-med-and-down">Time Table</span></a></li>
              <li class="tab"><a href="#announcements"><i class="fas fa-bullhorn"></i>&nbsp;<span className="hide-on-med-and-down">Announcements</span></a></li>
              <li class="tab"><a href="#attendance"><i class="far fa-hand-paper"></i>&nbsp;<span className="hide-on-med-and-down">Attendance</span></a></li>
              <li class="tab"><a href="#libraryBooks"><i class="fas fa-book"></i>&nbsp;<span className="hide-on-med-and-down">Library</span></a></li>
              <li class="tab"><a href="#stationaryMarketplace"><i class="fas fa-store"></i>&nbsp;<span className="hide-on-med-and-down">Stationary</span></a></li>
              <li class="tab"><a href="#myProfile"><i class="fas fa-user-circle"></i>&nbsp;<span className="hide-on-med-and-down">Profile</span></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
