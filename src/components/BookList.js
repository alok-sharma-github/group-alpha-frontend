// src/components/BookList.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookList = ({ books }) => {
//   return (
//     <div className="book-list">
//       {books.map((book, index) => (
//         <div key={index} className="book-item">
//           <Link to={`/book/${index}`}>{book.title}</Link> by {book.author} (Genre: {book.genre})
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;


// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} index={index} />
      ))}
    </div>
  );
};

export default BookList;


