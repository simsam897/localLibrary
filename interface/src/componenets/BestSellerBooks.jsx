// import { useEffect, useState } from "react";
// import BookCards from "./BookCards";

// const BestSellerBooks = () => {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     const books = async () => {
//       const res = await fetch("http://localhost:5000/api/book/books");
//       const data = await res.json();
//       if (res.ok) {
//         console.log(data);
//       }
//     };
//     books();
//   }, []);
//   return (
//     <div>
//       <BookCards books={books} headline="Best seller Books" />
//     </div>
//   );
// };

// export default BestSellerBooks;

// import { useEffect, useState } from "react";
// import BookCards from "./BookCards";

// const BestSellerBooks = () => {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/api/book/books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data.slice(0, 8)), []);
//   });
//   return (
//     <div>
//       <BookCards books={books} headline="Best seller Books" />
//     </div>
//   );
// };

// export default BestSellerBooks;

import { useEffect, useState } from "react";
import BookCards from "./BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/book/books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setBooks(data.slice(0, 8)))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <BookCards books={books} headline="Best seller Books" />
    </div>
  );
};

export default BestSellerBooks;
