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
  genre: {
    type: String,
    require: true,  
  },
  description: {
    type: String,
    require: true,
  },
});

const Book = mongoose.model("books", BookSchema);
module.exports = Book;