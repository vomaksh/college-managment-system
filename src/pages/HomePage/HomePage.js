import React, { Component } from 'react';
import "./App.css"
import Header from "../../components/header/Header"
import ContentArea from '../../components/withoutLogin/ContentArea';
import firebase from '../../config/fire';
import axios from 'axios';
import Footer from '../../components/footer/Footer';

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
    if(localStorage.getItem("rollNumber")){
      this.props.history.push("/dashboard")
    } else if(localStorage.getItem("teacherId")){
      this.props.history.push("/teacherDashboard")
    } else if(localStorage.getItem("societyId")){
      this.props.history.push("/societyDashboard")
    }
  }
  redirectStudent = () => {
    this.props.history.push("/dashboard")
  }
  redirectTeacher = () => {
    this.props.history.push("/teacherDashboard")
  }
  redirectSocietyAdmin = () => {
    this.props.history.push("/societyDashboard");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ContentArea redirectStudent={this.redirectStudent} redirectTeacher={this.redirectTeacher} redirectSocietyAdmin={this.redirectSocietyAdmin} />
        <Footer />
      </div>
    )
  }
}
