import { useEffect, useState } from "react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

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
    <>
      <div className="absolute top-20 ">
        <div className="flex justify-around">
          <Link to="/dashboard?tab=dashboard">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              Dashboard
            </Button>
          </Link>

          <Link to="/dashboard?tab=profile">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              profile
            </Button>
          </Link>

          <Link to="/dashboard?tab=add-book">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              Add books
            </Button>
          </Link>

          <Link to="/dashboard?tab=borrow">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              Borrow section
            </Button>
          </Link>

          <Link to="/dashboard?tab=return">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              Return
            </Button>
          </Link>

          <Link to="/dashboard?tab=borrowed-books">
            <Button
              gradientMonochrome="info"
              className="font-extrabold items-center text-[#202738]"
            >
              <HiUserCircle className="mr-3 h-7 w-7" />
              View Issued Book
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
