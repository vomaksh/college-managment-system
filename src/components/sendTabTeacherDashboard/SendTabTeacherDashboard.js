import React, { Component , Fragment } from 'react';
import axios from 'axios';
import CreatableSelect from 'react-select/lib/Creatable';
import {Input} from "semantic-ui-react"

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
      .collection("sem1")
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
      .collection("sem1")
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
          body: this.state.announcementBody
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
    return (
      <div className="container center-align">
        <h4>Post Messages to Students</h4>
        <form class="col s12">
          <div class="row">
          <Input placeholder='Search...' />
          <div class="input-field col s12">
            <input id="announcementTitle" type="text" onChange={this.onChangeHandler} placeholder="Announcement Title" />
          </div>
            <div class="input-field col s12">
              <textarea id="announcementBody" class="materialize-textarea" onChange={this.onChangeHandler} placeholder="Announcement Body"></textarea>
            </div>
          </div>
        </form>
        <button className="btn" onClick={this.onClickHandler} style={{
          marginTop: "-15px",
          marginBottom: "10px"
        }}>
          Generate Notification to all ECE Students
        </button>
        <h4>Add task to Students</h4>
        <div>
          <select onChange={event => {
            this.setState({
              batch: event.target.value
            });
          }}>
            <option value="none">Select Batch</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
          </select>
          <select onChange={event => {
            this.setState({
              day: event.target.value
            });
          }}>
            <option value="none">Select Day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
          <button className="btn col s12" style={{
            marginTop: "10px",
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
                <div className="row">
                <div class="input-field col s9">
                  <input id="task" type="text" value={this.state.task} placeholder="Task to be added" onChange={this.onChangeHandler} />
                </div>  
                <button className="btn col s3" style={{
                  marginTop: "12px"
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
