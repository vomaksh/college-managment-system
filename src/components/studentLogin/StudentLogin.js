import React, { Component } from 'react';
import "./StudentLogin.css";

export default class StudentLogin extends Component {
  render() {
    return (
        <div className="row login" style={{
          marginTop: "20px"
        }}>
          <div className="col s12 l6 offset-l6">
            <div className="card">
              <div className="card-action black white-text center-align">
                <h3>Student's Login</h3>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <label for="rollNumber">Roll Number</label>
                  <input type="text" id="rollNumber"></input>
                </div>
                <br />
                <div className="form-field">
                  <label for="password">Password</label>
                  <input type="password" id="password"></input>
                </div>
                <br />
                <div className="form-field center-align">
                  <button className="btn-large blue">Login as Student</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
