import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

export default class PracticalAttendance extends Component {
  render() {
    return (
      <div className="container center-align" style={{
        backgroundColor: "white"
      }}>
        <h2>Practical Attendance</h2>
        <Line data={{
          labels: this.props.dataPracticalSubject,
          datasets: [
            {
              label: 'Attendance in Practical Subjects',
              fill: true,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.props.dataPracticalAttendance
            }
          ]
        }} />
      </div>
    )
  }
}
