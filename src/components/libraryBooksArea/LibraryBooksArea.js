import React, { Component , Fragment } from 'react';
import LibraryBookItem from '../libraryBookItem/LibraryBookItem';

export default class LibraryBooksArea extends Component {
  render () {
    return (
      <div>
        {
          this.props.books.length > 0 ?
            this.props.books.map(book => <LibraryBookItem book={book} />)
            :
          <div>Finding Books.....</div>
        }
      </div>
    )
  }
}