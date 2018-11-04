import React, { Component } from 'react';
import fire from '../../config/fire';
import ForumCard from '../forumCard/ForumCard';
import Preloader from '../preloader/Preloader';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class Forum extends Component {
  constructor(props){
    super(props);
    this.state = {
      announcements: [],
      loading: true
    }
  }
  componentDidMount = () => {
    db.collection("announcements")
      .orderBy("id", "desc")
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot.size);
        this.setState({
          announcements: []
        })
        querySnapshot.forEach(doc => {
            this.setState({
              announcements: [...this.state.announcements, doc.data()],
              loading: false
            })
        });
      });
  }
  render() {
    return (
      <div className="row center-align" style={{
        minHeight: "650px"
      }}>
        {this.state.loading ?
          <div style={{
            height: "100%",
            width: "100%",
            marginLeft: "0%",
            marginTop: "10%",
            marginBottom: "40%"
          }}>
            <Preloader />
          </div>
        :
        this.state.announcements.map(announcement => {
          if(localStorage.getItem("teacherId")){
            if(announcement.showToTeachers !== false) {
              return <ForumCard title = {announcement.title} body = {announcement.body} />
            }
          } else {
            return <ForumCard title = {announcement.title} body = {announcement.body} />
          }
        })}
      </div>
    )
  }
}
