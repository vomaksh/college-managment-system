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
      subject: '',
      bookSubjects: {}
    }
  }
  componentDidMount = () => {
    let bookSubjects = new Set();
    db.collection('libraryBooks').get().then(snapshots => {
      snapshots.forEach(doc => {
        bookSubjects.add(doc.data().subject)
      });
      const bookSubjectsArray = [...bookSubjects];
      const bookSubjectsObject = {};
      bookSubjectsArray.forEach(bookSubject => {
        bookSubjectsObject[bookSubject] = null
      });
      this.setState({
        bookSubjects: bookSubjectsObject
      });
      var elems = document.querySelectorAll('.autocomplete');
      var instance = window.M.Autocomplete.init(elems[1], {
        data: this.state.bookSubjects
      });
    })
  }
  handleOnChange = event => {
    this.setState({
      subject: event.target.value
    })
  }
  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">book</i>
              <input type="text" id="bookSubject" class="autocomplete" onChange={this.handleOnChange} value={this.state.subject} />
              <label for="bookSubject">Book Subject</label>
            </div>
          </div>
        </div>
        <button className="btn-large col s12 blue" onClick={() => {
          this.props.fetchBooksBySubject("subject", this.state.subject)
        }}>
          Search By Book Subject
        </button>
      </div>
    )
  }
}