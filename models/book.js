//Require mongoose and establish schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define Book schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: "Book requires a title",
    trim: true,
  },
  authors: [String],
  description: {
    type: String,
    required: "Book requires a description",
  },
  image: {
    type: String,
    lowercase: false,
    required: "Book requires an image link",
  },
  link: {
    type: String,
    lowercase: false,
    required: "Book requires a link",
  },
});

//Export Book
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
