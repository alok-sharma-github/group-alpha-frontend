import React from 'react';
import { Link } from 'react-router-dom';
import BookForm from '../components/BookForm';

const AddBookPage = ({ addBook }) => {
  return (
    <div className="container">
      <h1>Add New Book</h1>
      <Link to="/" className="go-back-button">Go Back to Homepage</Link>
      <BookForm addBook={addBook} />
    </div>
  );
};

export default AddBookPage;

