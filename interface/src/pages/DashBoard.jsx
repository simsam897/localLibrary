import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bar from "../componenets/Bar";
import Profile from "./Profile";
import DashBoardComp from "./DashBoardComp";
import Borrow from "./Borrow";
import Return from "./Return";
import AddBooks from "../pages/AddBooks";
import ViewIssuedBook from "./ViewIssuedBook";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Bar />
        {tab === "profile" && <Profile />}
        {tab === "dashboard" && <DashBoardComp />}
        {tab === "add-book" && <AddBooks />}
        {tab === "borrow" && <Borrow />}
        {tab === "return" && <Return />}
        {tab === "borrowed-books" && <ViewIssuedBook />}
      </div>
    </div>
  );
}
