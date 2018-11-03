import React, { Component } from 'react';
import { BrowserRouter , Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Dashboard from './pages/Dashboard/Dashboard';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';
import { askForPermissioToReceiveNotifications } from './firebase-messaging-sw';
import SocietyDashboard from './pages/SocietyDashboard/SocietyDashboard';

class App extends Component {
  componentDidMount(){
    askForPermissioToReceiveNotifications();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/teacherDashboard" component={TeacherDashboard} />
          <Route path="/societyDashboard" component={SocietyDashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
