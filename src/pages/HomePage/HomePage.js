import React, { Component } from 'react';
import "./App.css"
import Header from "../../components/header/Header"
import ContentArea from '../../components/withoutLogin/ContentArea';

export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentArea />
      </div>
    )
  }
}
