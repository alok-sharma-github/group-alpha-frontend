import React from 'react';
import BookDetails from '../components/BookDetails';

const BookDetailsPage = ({ books }) => {
  return (
    <div className="container">
      <BookDetails books={books} />
    </div>
  );
};

export default BookDetailsPage;

