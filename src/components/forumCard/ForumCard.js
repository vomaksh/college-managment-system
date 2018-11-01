import React, { Component } from 'react'

export default class ForumCard extends Component {
  render() {
    return (
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{this.props.title}</span>
              <p>{this.props.body}</p>
            </div>
          </div>
      </div>
    )
  }
}
