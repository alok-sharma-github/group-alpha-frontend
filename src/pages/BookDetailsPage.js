// src/pages/BookDetailsPage.js
// import React from 'react';
// import BookDetails from '../components/BookDetails';

// const BookDetailsPage = ({ books }) => {
//   return (
//     <div>
//       <BookDetails books={books} />
//     </div>
//   );
// };

// export default BookDetailsPage;


// src/pages/BookDetailsPage.js
import React from 'react';
import BookDetails from '../components/BookDetails';

const BookDetailsPage = ({ books }) => {
  return (
    <div className="container">
      <BookDetails books={books} />
    </div>
  );
};

export default BookDetailsPage;

