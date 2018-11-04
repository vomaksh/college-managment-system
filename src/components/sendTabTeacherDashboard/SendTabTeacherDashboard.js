import React, { Component , Fragment } from 'react';
import axios from 'axios';
import CreatableSelect from 'react-select/lib/Creatable';
import { Input , Dropdown } from "semantic-ui-react"

import fire from '../../config/fire';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class SendTabTeacherDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      announcementTitle: '',
      announcementBody: '',
      batch: 'none',
      day: 'none',
      check: '',
      timeTable: [],
      task: ''
    }
  }
  componentDidMount() {
    window.M.AutoInit();
  }
  handleSelectChange = (newValue, actionMeta) => {
    this.setState({
      subjectId: newValue.docId
    });
    console.log(newValue)
  };
  handleInputChange = (inputValue, actionMeta) => {
    
  }
  getSubjectsByTimeTable = () => {
    db.collection("timeTable")
      .doc(this.state.batch)
      .collection(this.state.semester)
      .doc(this.state.day)
      .collection("0")
      .orderBy('id')
      .get()
      .then(snapshot => {
        this.state.timeTable = [];
        snapshot.forEach(doc => {
          this.setState({
            timeTable: [...this.state.timeTable, {
              label: doc.data().subject,
              value: doc.data().id,
              docId: doc.id
            }]
          });
        })
      })
  }
  addTaskToTimetable = () => {
    db.collection('timeTable')
      .doc(this.state.batch)
      .collection(this.state.semester)
      .doc(this.state.day)
      .collection("0")
      .doc(this.state.subjectId)
      .update({
        "task": this.state.task
      }).then(() => {
        this.setState({
          task: ''
        })
        window.M.toast({html: "Added Task Successfully"})
      }).catch(error => {
        console.log(error);
        window.M.toast({html: error});
      })
  }
  onClickHandler = () => {
    if(!(this.state.announcementTitle == '' || this.state.announcementBody == '')){
      axios.get("http://localhost:5000/nit-hackathon/us-central1/sendNotifications?title=" + this.state.announcementTitle + "&body=" + this.state.announcementBody).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error)
      });
      let totalData = 0;
      db.collection("announcements").doc("length").get().then(doc => {
        totalData = doc.data().length;
        db.collection("announcements").doc().set({
          id: doc.data().length + 1,
          title: this.state.announcementTitle,
          body: this.state.announcementBody,
          showToTeachers: true
        }).then(() => {
          db.collection("announcements").doc("length").update({
            length: totalData + 1
          })
          this.setState({
            announcementTitle: '',
            announcementBody: ''
          })
          window.M.toast({html: "Announcement Posted Successfully"});
        }).catch(error => {
          window.M.toast({html: "Unknown error took place"});
        })
      })
    } else {
      window.M.toast({html: "Fill announcement details to post to other students"});
    }
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  }
  render() {
    const batchOptions = [{
      key: 0,
      value: "cse",
      text: "CSE"
    }, {
      key: 1,
      value: "ece",
      text: "ECE"
    }];
    const days = [{
      key: 0,
      value: "monday",
      text: "Monday"
    }, {
      key: 1,
      value: "tuesday",
      text: "Tuesday"
    }, {
      key: 2,
      value: "wednesday",
      text: "Wednesday"
    }, {
      key: 3,
      value: "thursday",
      text: "Thursday"
    }, {
      key: 4,
      value: "friday",
      text: "Friday"
    }];
    const semesterOptions = [{
      key: 0,
      value: "sem1",
      text: "Semester 1"
    }, {
      key: 1,
      value: "sem2",
      text: "Semester 2"
    }];
    const selectStyle = {
      marginBottom: "10px",
      width: "100%"
    };
    return (
      <div className="container center-align" style={{
        marginTop: "20px"
      }}>
        <h2 className="white-text">Post Messages to Students</h2>
        <form class="col s12">
          <div class="row">
            <Input className="col s12" placeholder='Announcement Title' onChange={this.onChangeHandler} id="announcementTitle" value={this.state.announcementTitle} style={{
              marginBottom: "10px"
            }}/>
            <Input className="col s12" placeholder='Announcement Body' onChange={this.onChangeHandler} id="announcementBody" value={this.state.announcementBody} />
          </div>
        </form>
        <button className="btn-large blue" onClick={this.onClickHandler} style={{
          marginTop: "0px",
          marginBottom: "10px"
        }}>
          Send Announcement
        </button>
        <h2 className="white-text">Add task to Students</h2>
        <div>
          <Dropdown style={selectStyle} fluid selection placeholder='Select Batch' options={batchOptions} onChange={(event, data) => {
            console.log(data.value)
            this.setState({
              batch: data.value
            });
          }}/>
          <br />
          <Dropdown style={selectStyle} fluid selection placeholder='Select Semester' options={semesterOptions} onChange={(event, data) => {
            console.log(data.value)
            this.setState({
              semester: data.value
            });
          }}/>
          <br />
          <Dropdown style={selectStyle} fluid selection placeholder='Select Day' options={days} onChange={(event, data) => {
            console.log(data.value)
            this.setState({
              day: data.value
            });
          }}/>
          <br />
          <button className="btn-large col s12 blue" style={{
            marginTop: "0px",
            marginBottom: "15px"
          }} onClick={() => {
            this.getSubjectsByTimeTable()
          }}>
            Get Time Table for {this.state.day}
          </button>
          {this.state.timeTable.length > 0 ?
            <Fragment>
              <CreatableSelect
                onChange={this.handleSelectChange}
                onInputChange={this.handleInputChange}
                options={this.state.timeTable}
              /> 
              <div className="col s12">
                <div className="row" style={{
                  marginTop: "10px"
                }}>
                <Input className="col s8" placeholder='Add task' onChange={this.onChangeHandler} id="task" value={this.state.task} />
                <button className="btn-large col s3 offset-s1 blue" style={{
                  marginTop: "6px"
                }} onClick={this.addTaskToTimetable}>
                  Add Task
                </button>
                </div>
              </div>
            </Fragment>
            :
            null
          }
        </div>
      </div>
    )
  }
}
