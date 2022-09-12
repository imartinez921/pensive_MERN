const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  editor: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("books", BookSchema);
module.exports = Book;