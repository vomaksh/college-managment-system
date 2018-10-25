import React, { Component } from "react";
import TimeTableCard from "../timeTableCard/TimeTableCard";

export default class TimeTableEnhanced extends Component {
  render() {
    return (
      <div className="center-align" style={{
        marginTop: "10px"
      }}>
        <TimeTableCard subject="Industrial Management" time="8:40 AM" />
        <i class="fas fa-arrow-down blue-text" style={{
          fontSize: "30px"
        }}></i>
        <TimeTableCard subject="Digital Communication" time="9:35 AM"/>
        <i class="fas fa-arrow-down blue-text" style={{
          fontSize: "30px"
        }}></i>
        <TimeTableCard subject="Digital Communication" time="9:35 AM"/>
        <i class="fas fa-arrow-down blue-text" style={{
          fontSize: "30px"
        }}></i>
        <TimeTableCard subject="Digital Communication" time="9:35 AM"/>
      </div>
    );
  }
}
