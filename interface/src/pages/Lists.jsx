import React from "react";

export const Lists = () => {
  return (
    <>
      <div className="w-full  bg-[#005AB3]  py-10 ">
        <h1 className="text-center font-bold text-3xl text-white pb-5">
          ADMIN
        </h1>
        <ul class="grid grid-flow-col text-center text-gray-500  rounded-full px-5 gap-2 ">
          {" "}
          <li>
            {" "}
            <a
              href="/welcome"
              class="flex justify-center py-4 bg-white rounded-full shadow text-indigo-900"
            >
              Welcome
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="/profile"
              class="flex justify-center bg-white rounded-full shadow text-indigo-900 py-4"
            >
              Profile
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="Borrow"
              class="flex justify-center py-4 bg-white rounded-full shadow text-indigo-900"
            >
              Add Books
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="/borrow"
              class="flex justify-center py-4 bg-white rounded-full shadow text-indigo-900"
            >
              Borrow
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#page5"
              class="flex justify-center py-4 bg-white rounded-full shadow text-indigo-900"
            >
              Return
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#page5"
              class="flex justify-center py-4 bg-white rounded-full shadow text-indigo-900"
            >
              Sign Out
            </a>{" "}
          </li>{" "}
        </ul>
      </div>
    </>
  );
};
