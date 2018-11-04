import React, { Component } from 'react'

export default class TeacherLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      teacherId: '',
      teacherPassword: ''
    }
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="row login" style={{
        marginTop: "20px"
      }}>
        <div className="col s12 l6 offset-l6">
          <div className="card">
            <div className="card-action black white-text center-align">
              <h2>Teacher's Login</h2>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="teacherId">Teacher ID</label>
                <input type="text" id="teacherId" value={this.state.teacherId} onChange={this.onChangeHandler}></input>
              </div>
              <br />
              <div className="form-field">
                <label for="teacherPassword">Password</label>
                <input type="password" id="teacherPassword" value={this.state.teacherPassword} onChange={this.onChangeHandler}></input>
              </div>
              <br />
              <div className="form-field center-align">
                <button className="btn-large blue" onClick={() => {
                  this.props.signInTeacher(this.state.teacherId, this.state.teacherPassword)
                }}>Login as Teacher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
