import "./Inventory.css";
// import Sidebar from "./Sidebar";
export const Inventory = () => {
  return (
    <div className="form-container">
     
      <form>
        <h1>Add A New Book</h1>
        <div className="input-container">
          <input type="text" placeholder="Book name" className="input" />
          <input type="text" placeholder="ISBN Number" className="input" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Author Name" className="input" />
          <input type="number" placeholder="Quantity" className="input" />
        </div>

        <div className="input-container">
          <input type="text" placeholder="Pages" className="input" />
          {/* <input type="number" placeholder="Quantity" className="input" /> */}
        </div>
        <div className="input-container">
          <input type="file" className="input file-input" />
          <button className="upload-button">Upload Image</button>
        </div>
        <textarea
          className="input textarea"
          placeholder="Write book content here..."
        ></textarea>
        <button type="submit" className="submit-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Inventory;
