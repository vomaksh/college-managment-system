import React, { Component } from 'react';
import fire from "../../config/fire";
import "./StudentLogin.css";

export default class StudentLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      rollNumber: '',
      password: ''
    }
  }
  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
        <div className="row login" style={{
          marginTop: "20px"
        }}>
          <div className="col s12 l6 offset-l6">
            <div className="card">
              <div className="card-action black white-text center-align">
                <h2>Student's Login</h2>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <label for="rollNumber">Roll Number</label>
                  <input type="text" id="rollNumber" value={this.state.rollNumber} onChange={this.handleOnChange}></input>
                </div>
                <br />
                <div className="form-field">
                  <label for="password">Password</label>
                  <input type="password" id="password" value={this.state.password} onChange={this.handleOnChange}></input>
                </div>
                <br />
                <div className="form-field center-align">
                  <button className="btn-large blue" onClick={() => {
                    this.props.signInStudent(this.state.rollNumber, this.state.password)
                  }}>Login as Student</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
