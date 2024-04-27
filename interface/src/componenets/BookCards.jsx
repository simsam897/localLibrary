// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const BookCards = ({ headline, books: propBooks }) => {
  console.log(propBooks);
  const books = propBooks || [];

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* cards */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} style={{ backgroundColor: "#2B3371" }}>
              <Link to={`/book/${book._id}`}>
                <div className="relative ">
                  <img src={book.imageURL} alt="" />
                  <div className="absolute bg-blue-600 top-3 right-3 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white">{book.title}</h3>
                  <p className="text-white">{book.authorName}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

BookCards.propTypes = {
  headline: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
    })
  ),
};

export default BookCards;
