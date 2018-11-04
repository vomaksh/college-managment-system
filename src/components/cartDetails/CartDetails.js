import React, { Component } from 'react'

export default class CartDetails extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  render() {
    const items = Object.keys(this.props.cartDetails);
    let cartArrayDetails = [];
    items.forEach(item => {
      cartArrayDetails.push({
        item,
        quantity: this.props.cartDetails[item]
      });
    });
    return (
        <div id="cartDetails" class="modal bottom-sheet">
          <div class="modal-content">
            <h4>Your Shopping Cart</h4>
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArrayDetails.length > 0 ?
                    cartArrayDetails.map(product => (
                      <tr>
                        <td>{product.item}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    )) :
                    <p>Your Cart is Empty</p>
                }
              </tbody>
            </table>
          </div>
          <div class="modal-footer center-align">
            <button class="btn modal-close green darken-2" onClick={this.props.buyCartItems} style={{
              marginRight: "100px"
            }}>
              <b>Pay</b>
              <i class="fas fa-rupee-sign" style={{
                fontSize: "18px",
                marginLeft: "5px"
              }}></i> 
              &nbsp;
              <b>{this.props.totalPrice}</b>
            </button>
          </div>
        </div>
    )
  }
}
