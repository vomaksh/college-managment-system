import React, { Component } from 'react';
import "./App.css"
import Header from "../../components/header/Header"
import ContentArea from '../../components/withoutLogin/ContentArea';
import firebase from '../../config/fire';
import axios from 'axios';

export default class HomePage extends Component {
  componentDidMount(){
    firebase.messaging().getToken().then(currentToken => {
      if(currentToken){
        axios.get("http://localhost:5000/nit-hackathon/us-central1/helloWorld?token=" + currentToken).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        })
      } else {
        console.log("Haven't received current token yet")
      }
    }).catch(error => {
      console.log(error, "while taking a token")
    });
  }
  redirectStudent = () => {
    this.props.history.push("/dashboard")
  }
  redirectTeacher = () => {
    this.props.history.push("/teacherDashboard")
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ContentArea redirectStudent={this.redirectStudent} redirectTeacher={this.redirectTeacher} />
      </div>
    )
  }
}
