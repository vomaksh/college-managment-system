import React, { Component , Fragment } from 'react';

export default class LibraryBookItem extends Component{
  render () {
    const book = this.props.book;
    return (
      <div class="col s12 l6">
        <div class="card horizontal">
          <div class="card-image">
            <img src={book.bookImg} height="300px" width="170px" />
          </div>
          <div class="card-stacked white">
          {
              book.issued ?
              <i class="fas fa-dot-circle red-text right-align" style={{fontSize: "20px", padding: "10px"}}></i>
              :
              <i class="fas fa-dot-circle green-text right-align" style={{fontSize: "20px", padding: "10px"}}></i>
            }
          <h3 class="center-align white grey-text text-darken-4">{book.bookName}</h3>
            <div class="card-content white">
            <table>
              <tbody>
                <tr>
                  <td><b>Subject</b></td>
                  <td>{book.subject}</td>
                </tr>
                <tr>
                  <td><b>Writer</b></td>
                  <td>{book.writer}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}