import React, { Component } from 'react'

export default class ForumCard extends Component {
  render() {
    return (
        <div class="col s12 m6">
          <div class="card white">
            <div class="card-content black-text">
              <span class="card-title">{this.props.title}</span>
              <p>{this.props.body}</p>
            </div>
          </div>
      </div>
    )
  }
}
