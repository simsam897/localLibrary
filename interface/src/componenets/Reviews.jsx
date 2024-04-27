// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.css";

import { FaStar } from "react-icons/fa";

import { Avatar } from "flowbite-react";
import propic from "../assets/profile.jpg";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl text-[#14A672] text-center font-bold mb-10 leading-snug">
        Our Customers
      </h2>

      <div className="w-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="shadow-2xl  py-8 px-8 rounded-lg border  "
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl  py-8 px-8 rounded-lg border  " style={{backgroundColor: 'white'}}>
            <div className="space-y-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, optio modi vitae in dolorum alias animi facere
                  pariatur distinctio magni iusto impedit officia ad incidunt
                  eos, exercitationem, odit praesentium iste.
                </p>

                <Avatar
                  img={propic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-black">Jese Leos</h5>
                <p className="text-base text-black">Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
