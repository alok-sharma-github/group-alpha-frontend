import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, index }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${index}`} className="book-card-link">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </Link>
    </div>
  );
};

export default BookCard;
