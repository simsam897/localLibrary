import Book from "../models/book.model.js";

export const uploadBook = async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Book(data);
    await newBook.save();
    res.send(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error uploading book" });
  }
};

export const updateBookData = async (req, res) => {
  try {
    const id = req.params.id;
    const updateBookData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, updateBookData, {
      new: true,
    });
    res.send(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error updating book" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.send({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error deleting book" });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const books = await Book.find(query);
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching books" });
  }
};

export const singleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching book" });
  }
};
