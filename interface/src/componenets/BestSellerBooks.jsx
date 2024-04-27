import { useEffect, useState } from "react";
import BookCards from "./BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)), []);
  });
  return (
    <div>
      <BookCards books={books} headline="Best seller Books" />
    </div>
  );
};

export default BestSellerBooks;
