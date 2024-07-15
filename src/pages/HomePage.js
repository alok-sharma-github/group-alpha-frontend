import React, { useState } from "react";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import SearchForm from "../components/SearchForm";
const HomePage = ({ books }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <MainLayout />
      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
