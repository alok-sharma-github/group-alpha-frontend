
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';

const App = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell", genre: "Dystopian", available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", available: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", available: false },
    // Add more sample books as needed
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage books={books} />} />
        <Route path="/book/:id" element={<BookDetailsPage books={books} />} />
        <Route path="/add-book" element={<AddBookPage addBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default App;

