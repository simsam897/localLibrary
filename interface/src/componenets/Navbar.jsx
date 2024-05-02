import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown } from "flowbite-react";
import { FaUserCheck, FaSignOutAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // nav items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Books", path: "/books" },
    { link: "Categories", path: "/categories" },

    { link: "About", path: "/about" },
  ];

  return (
    <>
      <header className="w-full  bg-[#202738] top-0 left-0 right-0 translate-x-all ease-in duration-300 font-mono font-bold">
        <nav
          className={`py-1 lg:px-24 px-4 ${
            isSticky && "sticky top-0 left-0 right-0  bg-[]"
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            {/* {logo} */}
            <Link
              to="/"
              className="text-6xl text-white flex items-center gap-2"
            >
              <FaBlog className="inline-block  " />
              BOOK BUDDY
            </Link>

            {/* nav items for large device */}
            <ul className="md:flex  space-x-12 hidden font-family- Sans-serif ">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block  text-white uppercase cursor-pointer hover:text-blue-700  font-family- sans-serif; "
                >
                  {link}
                </Link>
              ))}
            </ul>

            <ul className="  flex  justify-center items-center  ">
              {currentUser ? (
                <>
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt="user"
                        img={currentUser.profilePicture}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <FaUserCheck className="w-10 h-10" color="navy" />

                      <span className="block text-md font-bold text-black truncate">
                        @{currentUser.username}
                      </span>
                      <span className="block text-sm font-medium text-black truncate">
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>

                    <Link to="/dashboard?tab=dashboard">
                      <Dropdown.Item className="text-blue-500 font-semibold">
                        <ImProfile className="w-4 h-4 mr-2" color="blue" />
                        Dashboard
                      </Dropdown.Item>
                    </Link>

                    <Dropdown.Divider />

                    <Dropdown.Item
                      className="text-red-500 font-semibold"
                      onClick={handleSignout}
                    >
                      <FaSignOutAlt className="w-4 h-4 mr-2" color="red" />
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </>
              ) : (
                <Link to="/signin">
                  <Button
                    className="bg-[#14A672] text-white font-semibold px-5 py-2 rounded hover:bg-black trasition-all duration-300 mr-3 "
                    color="gray"
                    pill
                    outline
                  >
                    <span className="hover:text-black">Sign In</span>
                  </Button>
                </Link>
              )}
            </ul>

            {/* btn for lg devices */}

            <div className="space-x-12 hidden lg:flex items-center">
              <button>
                <FaBarsStaggered className="w-5 hover:text-blue-700 " />
              </button>
            </div>
            {/* menu button for mobile devices */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white bg-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-white" />
                ) : (
                  <FaBarsStaggered className="h-5 w-5 text-white " />
                )}
              </button>
            </div>
          </div>
          {/* nav items for small devices */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0  right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
