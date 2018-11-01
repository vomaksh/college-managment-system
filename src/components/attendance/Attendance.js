import React, { Component } from 'react'
import TheoryAttendance from '../theoryAttendance/TheoryAttendance';
import PracticalAttendance from '../practicalAttendance/PracticalAttendance';

export default class Attendance extends Component {
  render() {
    return (
        <div class="row">
          <div class="blue-grey darken-3 col s12">
            <div className="container">
              <ul class="tabs tabs-transparent">
                <li class="tab col s6"><a href="#theory" className="active"><b>Theory</b></a></li>
                <li class="tab col s6"><a href="#practical"><b>Practical</b></a></li>
              </ul>
            </div>
          </div>
          <div id="theory" class="col s12">
            <TheoryAttendance />
          </div>
          <div id="practical" class="col s12">
            <PracticalAttendance />
          </div>
        </div>
    )
  }
}


