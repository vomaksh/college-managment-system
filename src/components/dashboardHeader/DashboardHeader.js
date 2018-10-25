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
          <li><Link to="/library">Library Search</Link></li>
          <li class="divider"></li>
          <li><Link to="/my-time-table">My Time Table</Link></li>
          <li class="divider"></li>
          <li><Link to="/my-semster-result">My Semester Results</Link></li>
          <li class="divider"></li>
          <li><a>Logout</a></li>
        </ul>
        <nav class="nav-extended black">
          <div class="container nav-wrapper">
            <a href="#" class="brand-logo">VOMAkSh</a>
            <ul class="right">
              <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons">more_vert</i></a></li>
            </ul>
          </div>
          <div class="container nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab"><a href="#timeTable" class="active"><i class="fas fa-clock"></i>&nbsp;&nbsp;<span className="hide-on-small-only">Time Table</span></a></li>
              <li class="tab"><a href="#announcements"><i class="fas fa-bullhorn"></i>&nbsp;&nbsp;<span className="hide-on-small-only">Announcements</span></a></li>
              <li class="tab"><a href="#attendance"><i class="far fa-hand-paper"></i>&nbsp;&nbsp;<span className="hide-on-small-only">Attendance</span></a></li>
              <li class="tab"><a href="#libraryBooks"><i class="fas fa-book"></i>&nbsp;&nbsp;<span className="hide-on-small-only">Library Books</span></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
