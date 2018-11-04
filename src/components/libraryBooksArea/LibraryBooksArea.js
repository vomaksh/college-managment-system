import React, { Component , Fragment } from 'react';
import LibraryBookItem from '../libraryBookItem/LibraryBookItem';
import Preloader from '../preloader/Preloader';

export default class LibraryBooksArea extends Component {
  render () {
    return (
      <div className="center-align">
        {
          this.props.books.length > 0 ?
            <Fragment>
              {this.props.books.length > 1 ?
                <h3 className="white-text green darken-2 z-depth-4" style={{padding: "10px", borderRadius: "10px"}}>Top 10 Library Books</h3>
                :
                <h3 className="white-text green darken-2 z-depth-4" style={{padding: "10px", borderRadius: "10px"}}>Search Results</h3>
              }
              {this.props.books.map(book => <LibraryBookItem book={book} />)}
            </Fragment>
            :
          <div style={{
            marginTop: "20px"
          }}>
            {this.props.loading ?
              <div style={{
                height: "100%",
                width: "100%",
                marginLeft: "0%",
                marginTop: "10px",
                marginBottom: "10%"
              }}>
                <Preloader />
              </div>
            :
              <h5 className="white-text">No Search Results found..</h5>
            }
          </div>
        }
      </div>
    )
  }
}