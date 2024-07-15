// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const books = [
//   { id: 1, title: "Book One", author: "Author One", genre: "Fiction" },
//   { id: 2, title: "Book Two", author: "Author Two", genre: "Non-Fiction" },
// ];

// function BookList() {
//   const [bookList, setBookList] = useState([]);

//   useEffect(() => {
//     // Fetch books data from a server or local storage
//     setBookList(books);
//   }, []);

//   return (
//     <div>
//       <h2>Books List</h2>
//       <ul>
//         {bookList.map((book) => (
//           <li key={book.id}>
//             <Link to={`/book/${book.id}`}>{book.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookList;

import React from "react";
import BookCard from "./BookCard";

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
