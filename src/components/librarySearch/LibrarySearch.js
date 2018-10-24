import React, { Component } from 'react'

export default class LibrarySearch extends Component {
  render() {
    return (
      <div className="row login" style={{
        marginTop: "70px"
      }}>
        <div className="col s12">
          <div className="card">
            <div className="card-action black white-text center-align">
              <h3>Library Book Search</h3>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="bookName">Enter Name of Book</label>
                <input type="text" id="bookName"></input>
              </div>
              <br />
              <br />
              <div className="form-field center-align">
                <button className="btn-large blue">Search in Library</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
