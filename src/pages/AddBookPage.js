// src/pages/AddBookPage.js
import React, { useState } from 'react';
import BookForm from '../components/BookForm';

const AddBookPage = ({ addBook }) => {
  return (
    <div className="container">
      <h1>Add New Book</h1>
      <BookForm addBook={addBook} />
    </div>
  );
};

export default AddBookPage;
