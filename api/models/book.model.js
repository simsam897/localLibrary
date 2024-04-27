import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
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
  description: {
    type: String,
  },
  isbn: {
    type: String,
  },
},
{timestamps: true,}
);

const Book = mongoose.model('Book', bookSchema);
export default Book;