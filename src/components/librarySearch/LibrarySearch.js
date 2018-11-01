import React, { Component } from 'react';
import fire from "../../config/fire";
import LibraryBooksArea from '../libraryBooksArea/LibraryBooksArea';

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class LibrarySearch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount = () => {
    db.collection("libraryBooks").get().then(snapshot => {
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
    })
  }
  render() {
    return (
      <div className="row login" style={{
        marginTop: "10px"
      }}>
        <div className="col s12">
          <div className="card">
            <div className="card-action black white-text center-align">
              <h3>Library Book Search</h3>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="bookName">Enter Name of Book</label>
                <input type="text" id="bookName"></input>
              </div>
              <br />
              <br />
              <div className="form-field center-align">
                <button className="btn-large blue">Search in Library</button>
              </div>
            </div>
          </div>
          {console.log(this.state.books)}
          <LibraryBooksArea books={this.state.books} />
        </div>
        
      </div>
    )
  }
}
