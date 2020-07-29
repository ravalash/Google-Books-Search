const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // Finds all saved books
  findAll: function (req, res) {
    db.Book.find({})
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  // Creates a new saved book
  create: function (req, res) {
    db.Book.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  // Deletes a book by the passed id
  remove: function (req, res) {
    console.log(`delete requested id ${req.params.id}`)
    db.Book.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
