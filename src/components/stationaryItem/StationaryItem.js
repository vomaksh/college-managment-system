import React, { Component } from 'react'

export default class StationaryItem extends Component {
  render() {
    return (
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img style={{
              height: "250px"
            }} src={this.props.link} />
            <a class="btn-floating right waves-effect waves-light orange darken-2 right" onClick={() => {
              this.props.addToCart(this.props.price, this.props.item)
            }} style={{
              marginRight: "0px",
              marginTop: "-25px"
            }}><i class="material-icons">add_shopping_cart</i></a>
            <a class="btn waves-effect waves-light green darken-2 right" style={{
              marginRight: "10px",
              marginTop: "-25px",
              cursor: "default"
            }}><i class="fas fa-rupee-sign"></i> <b style={{
              fontSize: "18px"
            }}>{this.props.price}</b></a>
          </div>
          <div class="card-content" style={{
            marginTop: "-12px"
          }}>
            <span class="card-title">{this.props.item}</span>
          </div>
        </div>
      </div> 
    )
  }
}
