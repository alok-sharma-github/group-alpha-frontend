// import React from "react";
// import BookList from "../components/BookList";
// import BookForm from "../components/BookForm";

// function HomePage() {
//   return (
//     <div>
//       <h1>Library Management System</h1>
//       <BookForm />
//       <BookList />
//     </div>
//   );
// }

// export default HomePage;
import React from "react";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";

const HomePage = ({ books }) => {
  return (
    <div className="container">
      <h1>Library Management System</h1>
      <Link to="/add-book" className="add-book-button">
        Add New Book
      </Link>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
