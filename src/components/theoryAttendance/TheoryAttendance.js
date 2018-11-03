import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
import fire from "../../config/fire";

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

const data = {
  labels: ['DSD', 'MPC', 'IM', 'CS', 'DC', 'CSP'],
  datasets: [
    {
      label: 'Attendance in Theory Subjects',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class TheoryAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theoryAttendance: []
    }
  }
  componentDidMount = () => {
    
  }
  render() {
    return (
      <div className="container center-align" style={{
        backgroundColor: "white",
        minHeight: "100%"
      }}>
        <h2>Theory Attendance</h2>
        <Line data={data} />
      </div>
    )
  }
}
