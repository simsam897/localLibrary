// import { useEffect, useState } from "react";

// import { Card } from "flowbite-react";

// const Books  = () => {
//   const [books , setBooks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);

//   return(
//      <div className="mt-28 px-4 lg:px24">
//       <h2 className="text-5xl font bold text-center">
//         All Books are here
//       </h2>

//       <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
//         {
//         books.map(book)=>
//         <Card
//       className="max-w-sm"
//       imgAlt="Meaningful alt text for an image that is not purely decorative"
//       imgSrc="/images/blog/image-1.jpg"
//     >
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//       </p>
//     </Card>

//          ) };
//       </div>
//     </div>
// );
// };

// export default Books;

import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {books.map((book, index) => (
          <Card
            key={index} // Adding a unique key for each Card component
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`/images/blog/image-${index + 1}.jpg`} // Assuming the images are named sequentially
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}{" "}
              {/* Assuming each book object has a 'title' property */}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description}{" "}
              {/* Assuming each book object has a 'description' property */}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Books;
