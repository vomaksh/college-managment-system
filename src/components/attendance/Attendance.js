import React, { Component } from 'react'
import TheoryAttendance from '../theoryAttendance/TheoryAttendance';
import PracticalAttendance from '../practicalAttendance/PracticalAttendance';
import fire from "../../config/fire";
import Preloader from '../preloader/Preloader';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
})

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount = () => {
    db.collection("students").where("rollNumber", "==", localStorage.getItem("rollNumber")).get().then(snapshot => {
      snapshot.forEach(doc => {
        const attendance = doc.data().attendance;
        const dataTheoryAttendance = [];
        const dataPracticalAttendance = [];
        const dataTheorySubject = [];
        const dataPracticalSubject = [];
        attendance.forEach(eachSubject => {
          if(eachSubject.type === "Theory"){
            console.log(eachSubject);
            dataTheoryAttendance.push(eachSubject.attendance);
            dataTheorySubject.push(eachSubject.subject);
            this.setState({
              dataTheorySubject,
              dataTheoryAttendance,
            });
            console.log(dataTheoryAttendance)
          } else {
            console.log(eachSubject);
            dataPracticalAttendance.push(eachSubject.attendance)
            dataPracticalSubject.push(eachSubject.subject);
            this.setState({
              dataPracticalSubject,
              dataPracticalAttendance,
              loading: false
            })
          }
        })
  })
})
  }
  render() {
    return (
        <div class="row" style={{
          minHeight: "650px"
        }}>
          <div class="blue-grey darken-3 col s12">
            <div className="container">
              <ul class="tabs tabs-transparent">
                <li class="tab col s6"><a href="#theory" className="active"><b>Theory</b></a></li>
                <li class="tab col s6"><a href="#practical"><b>Practical</b></a></li>
              </ul>
            </div>
          </div>
          <div>
            <div id="theory" class="col s12">
            {this.state.loading ?
              <div style={{
                height: "100%",
                width: "100%",
                marginLeft: "45%",
                marginTop: "10%",
                marginBottom: "30%"
              }}>
                <Preloader />
              </div>
              :
              <TheoryAttendance dataTheoryAttendance={this.state.dataTheoryAttendance} dataTheorySubject={this.state.dataTheorySubject} />}
          </div>
          <div id="practical" class="col s12">
            {this.state.loading ?
              <div style={{
                height: "100%",
                width: "100%",
                marginLeft: "45%",
                marginTop: "10%",
                marginBottom: "30%"
              }}>
                <Preloader />
              </div>
              :
              <PracticalAttendance dataPracticalAttendance={this.state.dataPracticalAttendance} dataPracticalSubject={this.state.dataPracticalSubject}/>}
          </div>
          </div>}
        </div>
    )
  }
}


