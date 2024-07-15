// src/pages/HomePage.js
// import React, { useState } from 'react';
// import BookForm from '../components/BookForm';
// import BookList from '../components/BookList';

// const HomePage = ({ books, addBook }) => {
//   return (
//     <div className="container">
//       <h1>Library Management System</h1>
//       <BookForm addBook={addBook} />
//       <BookList books={books} />
//     </div>
//   );
// };

// export default HomePage;



// src/pages/HomePage.js
import React from 'react';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';

const HomePage = ({ books }) => {
  return (
    <div className="container">
      <h1>Library Management System</h1>
      <Link to="/add-book" className="add-book-button">Add New Book</Link>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;


