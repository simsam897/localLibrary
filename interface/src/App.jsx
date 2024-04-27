import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./componenets/Navbar";

// import Shop from "./componenets/";
import SingleBook from "./componenets/SingleBook";

// import SignUp from "./pages/SignUp";
import AdminPage from "./pages/AdminPage";
import FooterComponent from "./componenets/FooterComponent";

import DashBoard from "./pages/DashBoard";
import LibraryCard from "./componenets/LibraryCard";
import BoxList from "./componenets/BoxList";
import Books from "./pages/Books";
import SignUpPage from "./pages/SignUpPage";
import SignIn from "./pages/SignIn";
import Sidebar from "./componenets/Sidebar";
import Inventory from "./componenets/Inventory";
import Categories from "./componenets/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Shop" element={<Shop />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/categories " element={<Categories />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/card" element={<LibraryCard />} />
        <Route path="/boxlist" element={<BoxList />} />

        <Route path="/books/:id" element={<Books />} />

        <Route path="/book/:id" element={<SingleBook />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/Sidebar" element={<Sidebar />} />

        <Route path="/Inventory" element={<Inventory />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
