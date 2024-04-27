
import { useEffect, useState } from "react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Bar() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  return (
    <div className="flex justify-center gap-5  mt-4 w-full ">
      <Link to="/dashboard?tab=welcome">
        <button className="bg-gray-600 text-white px-3 py-3 rounded-lg font-bold ">
          Welcome
        </button>
      </Link>

      <Link to="/dashboard?tab=profile">
        <button className=" bg-gray-600 text-white px-3 py-3 rounded-lg font-bold ">
          profile
        </button>
      </Link>

      <Link to="/dashboard?tab=dashboard">
        <button className="bg-gray-600 text-white px-3 py-3 rounded-lg font-bold ">
          Dashboard
        </button>
      </Link>

      <Link to="/dashboard?tab=borrow">
        <button className="bg-gray-600 text-white px-3 py-3 rounded-lg font-bold ">
          Borrow section
        </button>
      </Link>

      <Link to="/dashboard?tab=return">
        <button className="bg-gray-600 text-white px-3 py-3 rounded-lg font-bold ">
          Return
        </button>
      </Link>
    </div>
  );
}
