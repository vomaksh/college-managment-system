import React, { Component } from 'react';
import fire from "../../config/fire";
import LibraryBooksArea from '../libraryBooksArea/LibraryBooksArea';
import SearchByBookName from '../librarySearchMethod/SearchByBookName';
import SearchByBookWriter from '../librarySearchMethod/SearchByBookWriter';
import SearchByBookSubject from "../librarySearchMethod/SearchByBookSubject"

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class LibrarySearch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      books: [],
      loading: true
    }
  }
  componentDidMount = () => {
    window.M.AutoInit();
    db.collection("libraryBooks").get().then(snapshot => {
      this.setState({
        books: []
      });
      if(snapshot.size > 0) {
        snapshot.forEach(doc => {
          this.setState({
            books: [...this.state.books, doc.data()]
          })
        })
      }
      this.setState({
        loading: false
      })
    })
  }
  fetchBooks = (attribute, value) => {
    db.collection("libraryBooks").where(attribute, "==", value).get().then(snapshot => {
      this.setState({
        books: []
      })
      if(snapshot.size > 0) {
        snapshot.forEach(doc => {
          this.setState({
            books: [...this.state.books, doc.data()]
          })
        })
      }
      this.setState({
        loading: false
      })
    })
  }
  render() {
    return (
      <div className="row" style={{
        marginTop: "10px"
      }}>
        <div className="col s12">
        <div class="card">
          <div class="card-content black ">
            <h2 class="white-text text-darken-4 center-align">Search Books in Library</h2>
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width grey darken-4">
              <li class="tab"><a href="#bookTitle" className="white-text">Book Title</a></li>
              <li class="tab"><a href="#bookSubject" className="white-text">Subject</a></li>
              <li class="tab"><a href="#bookWriter" className="white-text">Writer</a></li>
            </ul>
          </div>
          <div class="card-content grey lighten-4">
            <div id="bookTitle">
              <SearchByBookName fetchBooksByName={this.fetchBooks} />
            </div>
            <div id="bookSubject">
              <SearchByBookSubject fetchBooksBySubject={this.fetchBooks} />
            </div>
            <div id="bookWriter">
              <SearchByBookWriter fetchBooksByWriter={this.fetchBooks} />
            </div>
          </div>
        </div>
          <LibraryBooksArea books={this.state.books} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}
