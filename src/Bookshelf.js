import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  static bookshelves = [
    { title: "Currently Reading",
      name: "currentylReading"
    },
    { title: "Want to Read",
      name: "wantToRead"
    },
    { title: "Read",
      name: "read"
    }
  ];

  static books = [
        {
            id: 1,
            image: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
            title: 'To Kill a Mockingbird',
            authors: ['Harper Lee'],
        },
        {
            id: 2,
            image: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
            title: 'Ender\'s Game',
            authors: ['Orson Scott Card'],
        },
    ];

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Bookshelf.books.map((book) => (
              <li key={book.id}>
                <Book
                  image={book.image}
                  authors={book.authors}
                  title={book.title}
                  bookshelfName={this.props.name}
                  />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
