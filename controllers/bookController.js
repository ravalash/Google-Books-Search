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
    db.Book.deleteOne({
      _id: req.paramd.id,
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
