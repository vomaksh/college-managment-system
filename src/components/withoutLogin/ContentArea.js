import React, { Component } from 'react';
import fire from "../../config/fire";
import StudentLogin from '../studentLogin/StudentLogin';
import TeacherLogin from '../teacherLogin/TeacherLogin';
import LibrarySearch from '../librarySearch/LibrarySearch';
import SocietyLogin from '../societyLogin/SocietyLogin';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class ContentArea extends Component {
  signInStudent = (rollNumber, password) => {
    db.collection("students").where("rollNumber", "==", rollNumber).get().then(querySnapshot => {
      if (querySnapshot.size > 0){
        querySnapshot.forEach(doc => {
          if(doc.data().password == password){
            localStorage.setItem("name", doc.data().name);
            localStorage.setItem("rollNumber", doc.data().rollNumber);
            console.log(doc.data());
            window.M.toast({html: "You have been successfully logged in as student"});
            this.props.redirectStudent();
          } else {
            window.M.toast({html: "Invalid Password"})
          }
        })
      } else {
        window.M.toast({html: "Invalid Student"})
      }
    })
  }
  signInTeacher = (teacherId, password) => {
    db.collection("teachers").where("teacherId", "==", teacherId).get().then(querySnapshot => {
      if (querySnapshot.size > 0){
        querySnapshot.forEach(doc => {
          if(doc.data().password == password){
            localStorage.setItem("name", doc.data().name);
            localStorage.setItem("teacherId", doc.data().teacherId);
            console.log(doc.data());
            window.M.toast({html: "You have been successfully logged in as teacher"});
            this.props.redirectTeacher();
          } else {
            window.M.toast({html: "Invalid Password"})
          }
        })
      } else {
        window.M.toast({html: "Invalid Teacher"})
      }
    })
  }
  signInSocietyAdmin = (societyId, password) => {
    db.collection("societies").where("societyId", "==", societyId).get().then(querySnapshot => {
      if (querySnapshot.size > 0){
        querySnapshot.forEach(doc => {
          if(doc.data().password == password){
            localStorage.setItem("name", doc.data().name);
            localStorage.setItem("societyId", doc.data().societyId);
            console.log(doc.data());
            window.M.toast({html: "You have been successfully logged in as Society Admin"});
            this.props.redirectSocietyAdmin();
          } else {
            window.M.toast({html: "Invalid Password"})
          }
        })
      } else {
        window.M.toast({html: "Invalid Society Admin"})
      }
    })
  }
  render() {
    return (
      <div>
        <div id="studentLogin" class="container col s12">
          <StudentLogin signInStudent={this.signInStudent} />
        </div>
        <div id="teacherLogin" class="container col s12">
          <TeacherLogin signInTeacher={this.signInTeacher} />
        </div>
        <div id="societyLogin" class="container col s12">
          <SocietyLogin signInSocietyAdmin={this.signInSocietyAdmin} />
        </div>
        <div id="librarySearch" class="container col s12">
          <LibrarySearch />
        </div>
      </div>
    )
  }
}
