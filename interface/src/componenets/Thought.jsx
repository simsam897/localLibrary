import { List } from "@mui/material";

const Thought = () => {
  return (
    <div className=" w-full h-90 bg-white mt-5  flex justify-center overflow-auto  ">
      <div className=" text-black bg-[white] rounded-md mt-5 mb-5 w-/4 h-80 border-2 border-[#324766] shadow-2xl">
        <h2 className="text-4xl font-bold text-center  text-[#F11626] py-5     ">
          Thought Of The Day
        </h2>

        <h3 className="font-bold text-[#005AB3] text-center flex justify-center items-center py-10 px-10 md:text-base lg:text-lg xl:text-xl tracking-tight md:tracking-normal leading-normal md:leading-tight ">
          “The best preparation for tomorrow is doing your best today.”
        </h3>
        <div>{/* logo on right side */}</div>

        <p className=" flex justify-end text-bold  font-mono px-3 text-[#005AB3] ">
          Author:- H. Jackson Brown Jr. 92
        </p>
     
      </div>
    </div>
  );
};

export default Thought;
