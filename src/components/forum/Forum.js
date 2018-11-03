import React, { Component } from 'react';
import fire from '../../config/fire';
import ForumCard from '../forumCard/ForumCard';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class Forum extends Component {
  constructor(props){
    super(props);
    this.state = {
      announcements: []
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
              announcements: [...this.state.announcements, doc.data()]
            })
        });
      });
  }
  render() {
    return (
      <div className="row center-align">
        {this.state.announcements.map(announcement => {
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
