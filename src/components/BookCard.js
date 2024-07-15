import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, index }) => {
  return (
    <div className="book-card">
      <div>
        <img src="/image.png" alt="" />
      </div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <div>
        <Link to={`/book/${index}`}>Know More</Link>
      </div>
    </div>
  );
};

export default BookCard;
 

 
