import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";
const FavBooks = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-[#005AB3]">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4  leading-snug text-white">
          Find your favorite <span className="text-[#14A672]">Books here</span>
        </h2>
        <p className="mb-10 text-lg md:-w-5/6 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias,
          culpa quos, dignissimos magni officiis dolores porro dolore quaerat
          veritatis, eveniet eligendi molestiae. Dolor rem cupiditate inventore
          sint, ipsam officiis!
        </p>

        <div className=" flex flex-col sm:flex-row justify-between  gap-6 md:w-3/4 my-14">
          <div>
            <h3 className=" text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold">1200+</h3>
            <p className="text-base">borrowed</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14"></div>
        <Link to="/shop" className=" block mt-12">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black trasition-all duration-300">
            Explore More
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default FavBooks;
