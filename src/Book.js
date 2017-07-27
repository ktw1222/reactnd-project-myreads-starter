import React, { Component } from 'react'
// import Bookshelf from './Bookshelf'
import BookshelfChanger from './BookshelfChanger'


class Book extends Component {
  render() {


    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
          }}>
          </div>
          <div>
            <BookshelfChanger
              book={this.props.book}
              moveBook={this.props.moveBook}
              bookshelfName={this.props.name}
            />
          </div>
        </div>

        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>

    )
  }
}

export default Book
