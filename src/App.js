import React, { Component } from 'react';
import { BrowserRouter , Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
