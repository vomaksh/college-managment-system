import React, { Component } from 'react'

export default class Header extends Component {
  componentDidMount(){
    window.M.AutoInit();
  }
  render() {
    return (
        <nav class="nav-extended black">
          <div class="container nav-wrapper">
            <a href="#" class="brand-logo">VOMAkSh</a>
          </div>
          <div class="container nav-content">
            <ul class="tabs tabs-transparent tabs-fixed-width">
              <li class="tab"><a href="#studentLogin" class="active">Student Login</a></li>
              <li class="tab"><a href="#teacherLogin">Teacher Login</a></li>
              <li class="tab"><a href="#societyLogin">Society Login</a></li>
              <li class="tab"><a href="#librarySearch">Library Search</a></li>
            </ul>
          </div>
        </nav>
    )
  }
}
