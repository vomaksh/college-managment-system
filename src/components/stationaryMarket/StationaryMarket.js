import React, { Component } from "react";
import fire from "../../config/fire";
import StationaryItem from "../stationaryItem/StationaryItem";
import CartDetails from "../cartDetails/CartDetails";
import Preloader from "../preloader/Preloader";

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class StationaryMarket extends Component {
  constructor(props) {
    super(props);
    this.cartItems = {};
    this.state = {
      stationaries: [],
      cartValue: 0,
      cartList: {},
      loading: true
    }
  }
  addToCart = (price, item) => {
    if(!this.cartItems[item]){
      this.cartItems[item] = 0;
    }
    this.cartItems[item]++;
    this.setState({
      cartValue: this.state.cartValue + price,
      cartList: this.cartItems
    });
  }
  componentDidMount = () => {
    window.M.AutoInit();
    db.collection("stationary")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.setState({
            stationaries: [...this.state.stationaries, doc.data()],
            loading: false
          })
        });
      });
  };
  buyCartItems = () => {
    const options = {
      "key": "rzp_test_1mNMojEPu7SOmN",
      "amount": this.state.cartValue * 100, // 2000 paise = INR 20
      "name": "Stationary Shop",
      "description": "All items in Cart",
      "image": "https://cdn2.iconfinder.com/data/icons/online-store-12/32/10_stationary_design_pencil_blade_cutter_tool-512.png",
      "handler": function (response){
          console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  render() {
    return (
      <div>
        {this.state.loading ?
          <div style={{
            height: "100%",
            width: "100%",
            marginLeft: "45%",
            marginTop: "20%",
            marginBottom: "35%"
          }}>
            <Preloader />
          </div>
        :
        <div>
          <div className="right-align" style={{
            marginTop: "10px"
          }}>
            <button className="left btn-large green darken-2" style={{
              cursor: "default"
            }}>
              <i class="fas fa-shopping-cart" style={{
                fontSize: "20px",
                marginRight: "6px"
              }}></i>
              <i class="material-icons" style={{
                fontSize: "20px"
              }}>
                arrow_right_alt
              </i>
                <i class="fas fa-rupee-sign" style={{
                  fontSize: "20px",
                  marginLeft: "5px"
                }}></i>
                <span style={{
                  fontSize: "20px",
                  marginLeft: "5px"
                }}>
                  <b>{this.state.cartValue}</b>
                </span>
            </button>
            <a class="waves-effect waves-light btn-large modal-trigger orange darken-2" href="#cartDetails">
              <i class="fas fa-shopping-cart" style={{
                fontSize: "20px",
                marginRight: "5px"
              }}></i>
            </a>
            <CartDetails 
              cartDetails={this.state.cartList} 
              totalPrice={this.state.cartValue} 
              buyCartItems={this.buyCartItems} />
          </div>
          <div className="row" style={{
            marginTop: "10px"
          }}>
          {console.log(this.state.cartList)}
            {this.state.stationaries.length > 0 ?
              this.state.stationaries.map(stationary => <StationaryItem link={stationary.link} item={stationary.item} price={stationary.price} addToCart={this.addToCart} />)
            : null}
          </div>
          </div>}
      </div>
    );
  }
}
