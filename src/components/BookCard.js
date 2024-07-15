import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, index }) => {
  return (
    <div className="book-card">
      <img src="/image.png" alt="" />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <Link to={`/book/${index}`}>Know More</Link>
    </div>
  );
};

export default BookCard;

 
