import React, { Component } from 'react';
import fire from "../../config/fire";

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
})

export default class SearchByBookName extends Component {
  constructor(props){
    super(props);
    this.state = {
      writer: '',
      bookWriters: {}
    }
  }
  componentDidMount = () => {
    let bookWriters = new Set();
    db.collection('libraryBooks').get().then(snapshots => {
      snapshots.forEach(doc => {
        bookWriters.add(doc.data().writer)
      });
      const bookWritersArray = [...bookWriters];
      const bookWritersObject = {};
      bookWritersArray.forEach(bookWriter => {
        bookWritersObject[bookWriter] = null
      });
      this.setState({
        bookWriters: bookWritersObject
      });
      var elems = document.querySelectorAll('.autocomplete');
      var instance = window.M.Autocomplete.init(elems[2], {
        data: this.state.bookWriters
      });
    });
  }
  handleOnChange = event => {
    this.setState({
      writer: event.target.value
    })
  }
  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">book</i>
              <input type="text" id="bookWriter" class="autocomplete writer" onChange={this.handleOnChange} value={this.state.writer} />
              <label for="bookWriter">Book Writer</label>
            </div>
          </div>
        </div>
        <button className="btn-large col s12 blue" onClick={() => {
          this.props.fetchBooksByWriter("writer", this.state.writer)
        }}>
          Search By Book Writer
        </button>
      </div>
    )
  }
}