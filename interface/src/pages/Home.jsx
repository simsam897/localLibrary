// import { Outlet } from "react-router-dom";
import Banner from "../componenets/Banner";
import BestSellerBooks from "../componenets/BestSellerBooks";

import FavBooks from "../componenets/FavBooks";
import PromoBanner from "../componenets/PromoBanner";
import Reviews from "../componenets/Reviews";

import Thought from "../componenets/Thought";

const Home = () => {
  return (
    <>
      <Banner />
      <Thought />
      <BestSellerBooks />
      <FavBooks />
      <Reviews />
      <PromoBanner />
    </>
  );
};

export default Home;
