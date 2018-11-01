import React, { Component } from 'react'

export default class TimeTableCard extends Component {
  render() {
    return (
      <div class="card">
          <div class="card-content left-align">
            <span class="card-title activator grey-text text-darken-4">
              <i class="material-icons right">more_vert</i>
              <span
                class="new badge green darken-2"
                data-badge-caption={this.props.time}
              />
              {this.props.subject}
            </span>
            <div className="center-align">
            <span
              class="new badge red"
              style={{
                float: "none",
                padding: "5px",
                marginLeft: "0px"
              }}
              data-badge-caption={this.props.task}
            />
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Topic- Trade Union
              <i class="material-icons right">close</i>
            </span>
          </div>
        </div>
    )
  }
}
