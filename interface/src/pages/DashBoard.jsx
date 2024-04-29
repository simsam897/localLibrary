import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bar from "../componenets/Bar";
import Profile from "./Profile";
// import DashBoardComp from "./DashBoardComp";
import Borrow from "./Borrow";
import Return from "./Return";
import { Welcome } from "./Welcome";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  return (

  <div >
    <div className="min-h-screen flex flex-col justify-center">
      <Bar />
      {tab === "profile" && <Profile />}
      {tab === "dashboard" && <DashBoardComp />}
      {tab === "borrow" && <Borrow />}
      {tab === "return" && <Return />}
      {tab === "welcome" && <Welcome />}
     
    </div>


    </div>




  );
}
