import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class BookshelfChanger extends Component {
  render() {
    return (
      // <div className="book-shelf-changer">
      //   <select>
      //     <option value="none" disabled>Move to...</option>
      //     <option value="currentlyReading">Currently Reading</option>
      //     <option value="wantToRead">Want to Read</option>
      //     <option value="read">Read</option>
      //     <option value="none">None</option>
      //   </select>
      // </div>

      <div className="book-shelf-changer">
        <select value={this.props.bookshelfName} onChange={(event => {
          let bookshelfName = event.target.value;
          this.props.moveBook(this.props.book, bookshelfName)
          })}>

          <option value="none" disabled>Move to...</option>
            {Bookshelf.bookshelves.map((bookshelf) => ((
              <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
            )))}

          // <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
