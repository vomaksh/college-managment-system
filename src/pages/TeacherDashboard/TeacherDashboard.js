import React, { Component , Fragment } from 'react';
import TeacherDashboardHeader from '../../components/teacherDashboardHeader/TeacherDashboardHeader';
import TeacherDashboardContentArea from '../../components/teacherDashboardContentArea/TeacherDashboardContentArea';

export default class TeacherProfile extends Component {
  render() {
    return (
      <Fragment>
        <TeacherDashboardHeader />
        <div className="container">
          <TeacherDashboardContentArea />
        </div>
      </Fragment>
    )
  }
}
