const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  editor: {
    type: String,
    require: true,
  },
  // chapter: {
  //   type: Schema.Types.ObjectId,
  //   ref: "chapters",
  // },
  genre: {
    type: String,
    require: true,  
  },
  description: {
    type: String,
    require: true,
  },
  content: {
    type: String
  }
});

const Book = mongoose.model("books", BookSchema);
module.exports = Book;