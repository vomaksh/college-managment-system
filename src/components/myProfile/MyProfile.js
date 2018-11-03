import React, { Component } from 'react';
import axios from 'axios';
import Preloader from '../preloader/Preloader';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      college: '',
      results: [],
      loading: true
    }
  }
  componentDidMount = () => {
    axios.get("http://localhost:5000/nit-hackathon/us-central1/fetchResults").then(response => {
      this.setState({
        results: response.data,
        name: response.data[0].Name,
        college: response.data[0].Institution,
        course: response.data[0].Programme,
        rollNumber: response.data[0].EnrollmentNumber,
        loading: false
      });
    })
  }
  render() {
    return (
      <div>
        {
          this.state.loading ?
          <div className="center-align" style={{
            height: "100%",
            width: "100%",
            marginTop: "50%",
            marginBottom: "-50%"
          }}>
            <Preloader />
          </div>
          :
          <div>
            
            {this.state.name} <br />
            {this.state.college}
          </div>
        }
      </div>
    )
  }
}
