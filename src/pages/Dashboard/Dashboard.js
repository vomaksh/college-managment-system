import React, { Component } from 'react'
import "./Dashboard.css"
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import DashboardContentArea from '../../components/dashboardContentArea/DashboardContentArea';

export default class Dashboard extends Component {
  componentDidMount() {
    window.M.AutoInit();
    (function(d, w, c) {
      w.ChatraID = 'vCwgWHPZ7hNQMYXLM';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
      w.ChatraIntegration = {
        name: localStorage.getItem('name'),
        notes: `Roll Number: ${localStorage.getItem('rollNumber')}`
      }
    })(document, window, 'Chatra');
  }
  render() {
    return (
      <div className="dashboard">
        <DashboardHeader />
        <DashboardContentArea />
      </div>
    )
  }
}
