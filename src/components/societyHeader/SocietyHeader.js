import React, { Component } from 'react'

const iconStyle = {
  marginRight: "10px"
}

export default class SocietyHeader extends Component {
  componentDidMount = () => {
    window.M.AutoInit();
  }
  render() {
    return (
      <div>
      <ul id="dropdown3" class="dropdown-content">
        <li onClick={this.props.logout}><a>Logout</a></li>
      </ul>
      <nav class="black nav-extended">
        <div class="center-align container nav-wrapper">
          <a href="#" class="brand-logo">VOMAkSh</a>
          <ul class="right">
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown3"><i class="material-icons">more_vert</i></a></li>
          </ul>
        </div>
        <div class="container nav-content">
          <ul class="tabs tabs-transparent tabs-fixed-width">
            <li class="tab">
              <a href="#send">
                <i class="fas fa-share-square" style={iconStyle}></i>
                <span className="hide-on-med-and-down">Send Announcement</span>
              </a>
            </li>
            <li class="tab">
              <a href="#announcements">
                <i class="fas fa-bullhorn" style={iconStyle}></i>
                <span className="hide-on-med-and-down">All Announcements</span>
              </a>
            </li>
            <li class="tab">
              <a href="#marketplace">
                <i class="fas fa-store" style={iconStyle}></i>
                <span className="hide-on-med-and-down">MarketPlace</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}
