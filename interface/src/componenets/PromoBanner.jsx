import { Link } from "react-router-dom";
import bookPic from "../assets/awardbooks.png";
const PromoBanner = () => {
  return (
    <div className=" py-12 bg-[#FFF3E3] lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2023 national book Awards of Fiction ShortList
          </h2>
          <Link to="/shop" className=" block mt-12">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black trasition-all duration-300">
              borrow now
            </button>
          </Link>
        </div>
        <div>
          <img src={bookPic} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
