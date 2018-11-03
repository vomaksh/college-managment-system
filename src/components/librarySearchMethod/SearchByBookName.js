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
      title: '',
      bookTitles: {}
    }
  }
  componentDidMount = () => {
    let bookTitles = new Set();
    db.collection('libraryBooks').get().then(snapshots => {
      snapshots.forEach(doc => {
        bookTitles.add(doc.data().bookName)
      });
      const bookTitlesArray = [...bookTitles];
      const bookTitlesObject = {};
      bookTitlesArray.forEach(bookTitle => {
        bookTitlesObject[bookTitle] = null
      });
      this.setState({
        bookTitles: bookTitlesObject
      });
      var elems = document.querySelectorAll('.autocomplete');
      var instance = window.M.Autocomplete.init(elems[0], {
        data: this.state.bookTitles
      });
    })
  }
  handleOnChange = event => {
    this.setState({
      title: event.target.value
    })
  }
  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">book</i>
              <input type="text" id="bookTitle" class="autocomplete" value={this.state.title} onChange={this.handleOnChange} />
              <label for="bookTitle">Book Title</label>
            </div>
          </div>
          <button className="btn-large col s12 blue" onClick={() => {
            this.props.fetchBooksByName("bookName", this.state.title)
          }}>
            Search By Book Title
          </button>
        </div>
      </div>
    )
  }
}
