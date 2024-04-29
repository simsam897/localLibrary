// import { useLoaderData } from "react-router-dom";

// // export const SingleBook = () => {
// //   const {book} = useLoaderData();

// //   return <div>SingleBook{book.title}</div>;
// // };

// const SingleBook = () => {
//   const { title, authorName } = useLoaderData();
//   console.log(title, authorName);

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{title}</h1>

//       <h3>{authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import { useState, useEffect } from "react";

// const SingleBook = () => {
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{book.title}</h1>
//       <h3>{book.authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // Import useParams

// const SingleBook = () => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const params = useParams(); // Get the route parameters

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch book");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [params.id]); // Include params.id in the dependency array

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{book.title}</h1>
//       <h3>{book.authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import React, { useState, useEffect } from "react";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Extract title and authorName from the fetched data
//         const { title, authorName } = data;
//         setTitle(title);
//         setAuthorName(authorName);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{title}</h1>
//       <h3>{authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import  { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   // Get the route parameters using useParams
//   const params = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Extract title and authorName from the fetched data
//         const { title, authorName } = data;
//         setTitle(title);
//         setAuthorName(authorName);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [params.id]); // Include params.id in the dependency array

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{title}</h1>
//       <h3>{authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import  { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   const params = useParams(); // Get the route parameters

//   useEffect(() => {
//     // Fetch book data using params.id
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Extract title and authorName from the fetched data
//         const { title, authorName } = data;
//         setTitle(title);
//         setAuthorName(authorName);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [params.id]); // Include params.id in the dependency array

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>{title}</h1>
//       <h3>{authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   const params = useParams(); // Get the route parameters

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Extract title and authorName from the fetched data
//         const { title, authorName } = data;
//         setTitle(title);
//         setAuthorName(authorName);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [params.id]); // Include params.id in the dependency array

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>Title: {title}</h1>
//       <h3>Author: {authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   const params = useParams(); // Get the route parameters

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setTitle(data.title); // Set only the title
//         setAuthorName(data.authorName); // Set only the authorName
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [params.id]); // Include params.id in the dependency array

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>Title: {title}</h1>
//       <h3>Author: {authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//   const [title, setTitle] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   const params = useParams(); // Get the route parameters

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${params.id}`)
//       .then((res) => res.json())
//       .then(({ title, authorName }) => {
//         setTitle(title); // Set only the title
//         setAuthorName(authorName); // Set only the authorName
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [params.id]); // Include params.id in the dependency array

//   if (!title || !authorName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h1>Title: {title}</h1>
//       <h3>Author: {authorName}</h3>
//     </div>
//   );
// };

// export default SingleBook;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `http://localhost:5173/api/book/singlebook/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="mt-28 px-4 lg:px-24 ">
      {book ? (
        <>
          <div className="flex  ">
            <div>
              <img
                className="w-90 h-90 mr-6 mb-5 "
                src={book.imageURL}
                alt=""
              />
              <button className="text-bold text-3xl bg-cyan-600 rounded-lg">
                Borrow
              </button>
            </div>
            <div className="ml-10 mb-5 mt-0 flex flex-col gap-5 ">
              <h3 className="text-3xl">
                {" "}
                <span className=" text-bold text-4xl">
                  Author Of Book:{" "}
                </span>{" "}
                {book.authorName}
              </h3>{" "}
              <h1 className="text-3xl">
                {" "}
                <span className=" text-bold text-4xl">
                  {" "}
                  Title Of Book :
                </span>{" "}
                {book.title}
              </h1>
              <h1 className="text-2xl">
                {" "}
                <span className=" text-bold text-3xl">
                  Description :
                </span> : {book.description}
              </h1>
              <h1 className="text-2xl">
                {" "}
                <span className=" text-bold text-3xl">isbn :</span> :{" "}
                {book.isbn}
              </h1>
              <h1 className="text-2xl">
                {" "}
                <span className=" text-bold text-3xl">pages:</span> :{" "}
                {book.pages}
              </h1>
            </div>
          </div>

          {/* Assuming authorName is a field in your book object */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBook;
