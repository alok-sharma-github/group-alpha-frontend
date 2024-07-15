import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import AddBookPage from "./pages/AddBookPage";

const App = () => {
  const [books, setBooks] = useState([
    {
      image: "/book1.jpeg",
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      available: true,
    },
    {
      image: "/book2.jpeg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      available: true,
    },
    {
      image: "/book3.jpeg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      available: false,
    },
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

 

