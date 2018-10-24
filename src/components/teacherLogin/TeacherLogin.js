import React, { Component } from 'react'

export default class TeacherLogin extends Component {
  render() {
    return (
      <div className="row login" style={{
        marginTop: "20px"
      }}>
        <div className="col s12 l6 offset-l6">
          <div className="card">
            <div className="card-action black white-text center-align">
              <h3>Teacher's Login</h3>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="teacherId">Teacher ID</label>
                <input type="text" id="teacherId"></input>
              </div>
              <br />
              <div className="form-field">
                <label for="teacherPassword">Password</label>
                <input type="password" id="teacherPassword"></input>
              </div>
              <br />
              <div className="form-field center-align">
                <button className="btn-large blue">Login as Teacher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
