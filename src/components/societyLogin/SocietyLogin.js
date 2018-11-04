import React, { Component } from 'react'

export default class SocietyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      societyId: '',
      societyPassword: ''
    }
  }
  onChangeHandler = event => {
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
              <h2>Society Admin's Login</h2>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="societyId">Society Admin ID</label>
                <input type="text" id="societyId" value={this.state.societyId} onChange={this.onChangeHandler}></input>
              </div>
              <br />
              <div className="form-field">
                <label for="societyPassword">Password</label>
                <input type="password" id="societyPassword" value={this.state.societyPassword} onChange={this.onChangeHandler}></input>
              </div>
              <br />
              <div className="form-field center-align">
                <button className="btn-large blue" onClick={() => {
                  this.props.signInSocietyAdmin(this.state.societyId, this.state.societyPassword)
                }}>Login as Society Admin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
