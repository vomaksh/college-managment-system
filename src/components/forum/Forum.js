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
        {console.log("In render", this.state.announcements)}
        {this.state.announcements.map(announcement => {
          return <ForumCard title = {announcement.title} body = {announcement.body} />
        })}
      </div>
    )
  }
}
