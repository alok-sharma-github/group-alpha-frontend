// import React from "react";
// import { useParams } from "react-router-dom";
// import BookDetails from "../components/BookDetails";

// function BookDetailsPage() {
//   const { id } = useParams();
//   return <BookDetails id={id} />;
// }

// export default BookDetailsPage;
import React from "react";
import BookDetails from "../components/BookDetails";

const BookDetailsPage = ({ books }) => {
  return (
    <div className="container">
      <BookDetails books={books} />
    </div>
  );
};

export default BookDetailsPage;
