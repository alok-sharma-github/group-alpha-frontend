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


