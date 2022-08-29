const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Book = require("../../models/Book");
const validateBookInput = require("../../validation/books");

// router.get("/test", (req, res) => res.json({ msg: "This is the books route" }));
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No books found" }));
});

router.get("/user/:user_id", (req, res) => {
  Book.find({ user: req.params.user_id })
    .then((books) => res.json(books))
    .catch((err) =>
      res.status(404).json({ nobooksfound: "No books found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res.status(404).json({ nobookfound: "No book found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newBook = new Book({
      title: req.body.title,
      author: req.user.id,
      // editor: req.body.editor,
      // genre: req.body.genre,
      // description: req.body.description,
    });

    newBook.save().then((book) => res.json(book));
  }
);

module.exports = router;