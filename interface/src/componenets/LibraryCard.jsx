import { Avatar } from "flowbite-react";
import propic from "../assets/profile.jpg";
import BoxList from "./BoxList";
const LibraryCard = () => {
  return (
    <div className="w-full h-screen mx-auto bg-[#2B3371] border-box flex justify-center">

    



      <div className="w-1/4 h-80 bg-white mt-10 rounded-lg absolute">
        <div className="flex flex-col items-center pb-10 ">
          <div className="flex flex-wrap mt-6 gap-4">
            <Avatar
              img={propic}
              alt="avatar of Jese"
              rounded
              className="w-18 mb-6"
            />
          </div>

          <div>
          <h1 className="text-center font-bold text-3xl">Sandra</h1>
          <h1 className="text-center font-bold">USERID: GJVHH65566</h1>
          <h1 className="text-center font-bold mt-4">EMAIIL: SAMSEH@GMAIL.COM</h1>
          </div>

          <div className="flex flex-wrap mt-6 gap-6">
            <button className="bg-blue-700 rounded-md font-bold px-4 py-3 mb-3 text-white">My account</button>

            <button className="bg-red-600 rounded-md font-bold px-4 text-white mb-3">Logout</button>
          </div>
          <div>
      <BoxList />
      </div>
        </div>

      


      </div>
     

     





    </div>
    
  );
};

export default LibraryCard;
