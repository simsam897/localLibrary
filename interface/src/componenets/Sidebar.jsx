import Inventory from "./Inventory";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="flex  justify-center items-center  ">
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Profile
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Dashboard
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              users
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Comments
            </a>
          </li>
        </ul>
      </div>

      <div
        className="flex justify-center bg-[]  "
        style={{ width: "100%", marginTop: "0" }}
      >
        
        <Inventory />
      </div>
    </div>
  );
};

export default Sidebar;
