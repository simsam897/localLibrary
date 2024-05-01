import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-[#3b416d] flex items-center ">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20">
        {/* left side */}
        <div>
          <h2 className="text-5xl font-bold leading-snug text-[black]">
            Get all
            <span className="text-[#14A672] "> Popular Books Here</span>
          </h2>
          <p className="md:w-4/5 text-white text-2xl">
            "Explore our library's curated selection of popular books, where you
            can discover the latest , beloved classics, and trending titles to
            ignite your imagination and feed your curiosity"
            <div className=" md:w-1/2 space-y-5 h-full border-solid  ">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search a book"
                className=" border-solid py-4 mt-3 px-2 rounded-s-sm  "
              />
              <button className="bg-blue-700  px-6 py-4 text-white font-medium hover:bg-black translate-all ease-in duration-200 ">
                Search
              </button>
            </div>
          </p>
        </div>

        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
