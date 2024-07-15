// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import BookDetailsPage from './pages/BookDetailsPage';

// const App = () => {
//   const [books, setBooks] = useState([]);

//   const addBook = (book) => {
//     setBooks([...books, book]);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<HomePage books={books} addBook={addBook} />}
//         />
//         <Route
//           path="/book/:id"
//           element={<BookDetailsPage books={books} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';

const App = () => {
  const [books, setBooks] = useState([]);

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


