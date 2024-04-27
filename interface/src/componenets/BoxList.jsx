const BoxList = () => {
  return (
    <div className="w-full h-screen bg-[#2B3371]  flex justify-between gap-5 px-2">
      <div className=" w-60 h-40 bg-white rounded-lg  mt-10   ">
        <button className="text-4xl text-white bg-[#14A672] h-full w-full rounded-lg  ">
          Total Books
        </button>
      </div>

      <div className=" w-60 h-40 bg-white rounded-lg  mt-10 ">
        <button className="text-4xl bg-[#005AB3] h-full w-full rounded-lg text-white ">
          Total Books
        </button>
      </div>

      <div className=" w-60   h-40 bg-white rounded-lg  mt-10 ">
        <button className="text-4xl bg-[#202738] h-full w-full rounded-lg text-white  ">
          Total Books
        </button>
      </div>

      <div className=" w-60 h-40 bg-white rounded-lg mt-10  ">
        <button className="text-4xl bg-[#F11626] h-full w-full  rounded-lg text-white">
          Total Books
        </button>
      </div>

      <div className=" w-60 h-40 bg-white rounded-lg  mt-10 ">
        <button className="text-4xl bg-[#66fcde] h-full w-full  rounded-lg text-white  ">
          Total Books
        </button>
      </div>
    </div>
  );
};

export default BoxList;
