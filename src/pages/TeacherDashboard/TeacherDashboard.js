import React, { Component , Fragment } from 'react';
import TeacherDashboardHeader from '../../components/teacherDashboardHeader/TeacherDashboardHeader';
import TeacherDashboardContentArea from '../../components/teacherDashboardContentArea/TeacherDashboardContentArea';
import "./TeacherDashboard.css";

export default class TeacherProfile extends Component {
  logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("teacherId");
    this.props.history.push("/");
    window.M.toast({html: "You have been successfully logged out"});
  }
  render() {
    return (
      <div className="teacherDashboard">
        <TeacherDashboardHeader logout={this.logout} />
        <div className="container">
          <TeacherDashboardContentArea />
        </div>
      </div>
    )
  }
}
