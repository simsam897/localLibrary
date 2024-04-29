import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    category: {
      type: String,
    },

    imageURL: {
      type: String,
      default:
        "https://premadecovers.com/octopicovers/wp-content/uploads/2016/10/Soon5-scaled.jpg",
    },
    description: {
      type: String,
    },
    isbn: {
      type: String,
    },
    totalPages: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
