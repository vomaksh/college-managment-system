import React, { Component } from 'react';
import StudentLogin from '../studentLogin/StudentLogin';
import TeacherLogin from '../teacherLogin/TeacherLogin';
import LibrarySearch from '../librarySearch/LibrarySearch';

export default class ContentArea extends Component {
  render() {
    return (
      <div>
        <div id="studentLogin" class="container col s12">
          <StudentLogin />
        </div>
        <div id="teacherLogin" class="container col s12">
          <TeacherLogin />
        </div>
        <div id="librarySearch" class="container col s12">
          <LibrarySearch />
        </div>
      </div>
    )
  }
}
