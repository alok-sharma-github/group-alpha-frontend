// src/components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books[id];

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p className="status">Status: {book.available ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};

export default BookDetails;

