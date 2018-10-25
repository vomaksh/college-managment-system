import React, { Component } from 'react'

export default class TimeTable extends Component {
  render() {
    return (
      <table className="centered responsive-table">
        <thead>
          <tr>
              <th>At 8:40 AM</th>
              <th>At 9:35 AM</th>
              <th>10:30 AM</th>
              <th>11:25 AM</th>
              <th>12:20 PM</th>
              <th>12:50 PM</th>
              <th>1:45 PM</th>
              <th>2:40 PM</th>
              <th>3:35 PM</th>
              <th>4:30 PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Industrial Management</th>
            <td>Digital Communications</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
            <td>IM</td>
          </tr>
          <tr>
            <td>Assignment</td>
            <td>File</td>
            <td>IM</td>
            <td>Register</td>
            <td>-</td>
            <td>-</td>
            <td>Quiz</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
