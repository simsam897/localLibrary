import React from "react";
import { Lists } from "./Lists";
import Inventory from "../componenets/Inventory";

const AddBooks = () => {
  return (
    <div className="w-full  flex flex-col justify-center">
      <div>
        <Lists />
      </div>
      <div className="w-full flex justify-center py-5">
        <Inventory />
      </div>
    </div>
  );
};

export default AddBooks;
