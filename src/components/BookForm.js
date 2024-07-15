import React, { useState } from "react";
import axios from "axios";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, available: true };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/books",
        newBook,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      addBook(response.data.data); // Assuming the API returns the created book in `response.data.data`
      setTitle("");
      setAuthor("");
      setGenre("");
    } catch (error) {
      console.error("There was an error adding the book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
 


