// import React from "react";

// const books = [
//   {
//     id: 1,
//     title: "Book One",
//     author: "Author One",
//     genre: "Fiction",
//     available: true,
//   },
//   {
//     id: 2,
//     title: "Book Two",
//     author: "Author Two",
//     genre: "Non-Fiction",
//     available: false,
//   },
// ];

// function BookDetails({ id }) {
//   const book = books.find((b) => b.id === parseInt(id));

//   if (!book) {
//     return <div>Book not found</div>;
//   }

//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>
//         <strong>Author:</strong> {book.author}
//       </p>
//       <p>
//         <strong>Genre:</strong> {book.genre}
//       </p>
//       <p>
//         <strong>Available:</strong> {book.available ? "Yes" : "No"}
//       </p>
//     </div>
//   );
// }

// export default BookDetails;
import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books[id];

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p className="status">
        Status: {book.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default BookDetails;
