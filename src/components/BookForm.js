// import React, { useState } from "react";

// function BookForm() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [genre, setGenre] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newBook = { title, author, genre };
//     // Handle adding the new book (e.g., update state or make API call)
//     console.log("New Book:", newBook);
//   };

//   return (
//     <div>
//       <h2>Add New Book</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Author:</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Genre:</label>
//           <input
//             type="text"
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Book</button>
//       </form>
//     </div>
//   );
// }

// export default BookForm;

import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, genre, available: true });
    setTitle("");
    setAuthor("");
    setGenre("");
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
