import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { fetchBooks } from '../api';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch books');
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
      <Link to="/add-book" className="add-book-button">Add New Book</Link>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
