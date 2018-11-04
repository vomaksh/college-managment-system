import React, { Component , Fragment } from 'react';
import axios from 'axios';
import { Input , Checkbox } from "semantic-ui-react"

import fire from '../../config/fire';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class SendSocietyAnnouncement extends Component {
  constructor(props){
    super(props);
    this.state = {
      announcementTitle: '',
      announcementBody: '',
      showToTeachers: true
    }
  }
  componentDidMount() {
    window.M.AutoInit();
  }
  addToDatabase = () => {
    let totalData = 0;
      db.collection("announcements").doc("length").get().then(doc => {
        totalData = doc.data().length;
        db.collection("announcements").doc().set({
          id: doc.data().length + 1,
          title: this.state.announcementTitle,
          body: this.state.announcementBody,
          showToTeachers: this.state.showToTeachers
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
}
  onClickHandler = () => {
    if(!(this.state.announcementTitle == '' || this.state.announcementBody == '' || !this.state.showToTeachers)){
      axios.get("http://localhost:5000/nit-hackathon/us-central1/sendNotifications?title=" + this.state.announcementTitle + "&body=" + this.state.announcementBody).then(response => {
        console.log(response);
        this.addToDatabase()
      }).catch(error => {
        console.log(error)
      });
    } else {
      if(!(this.state.announcementTitle == '' || this.state.announcementBody == '')){
        this.addToDatabase()
      } else {
        window.M.toast({html: "Fill announcement details to post to other students"});
      }
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
      <div className="container center-align" style={{
        marginTop: "20px",
        height: "600px"
      }}>
        <h2 className="white-text">Post Messages to Students</h2>
        <form class="col s12">
          <div class="row">
            <Input className="col s12" placeholder='Event Title' onChange={this.onChangeHandler} id="announcementTitle" value={this.state.announcementTitle} style={{
              marginBottom: "10px"
            }}/>
            <Input className="col s12" placeholder='Description of Event' onChange={this.onChangeHandler} id="announcementBody" value={this.state.announcementBody} style={{
              marginBottom: "10px"
            }}/>
            <Checkbox label="Don't show updates to faculty" onChange={(event, data) => {
              this.setState({
                showToTeachers: !data.checked
              })
            }} />
          </div>
        </form>
        <button className="btn-large blue" onClick={this.onClickHandler} style={{
          marginTop: "0px",
          marginBottom: "10px"
        }}>
          Send Event Info.
        </button>
      
      </div>
    )
  }
}
