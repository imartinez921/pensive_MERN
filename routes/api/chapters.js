const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Chapter = require("../../models/Chapter");
const validateChapterInput = require("../../validation/chapters");


// router.get("/test", (req, res) => res.json({ msg: "This is the books route" }));

// Chapter Index
router.get("all/:book_id", (req, res) => {
    Chapter.find({ bookId: req.params.book_id })
        .then((chapters) => res.json(chapters))
        .catch((err) =>
            res.status(404).json({ nochaptersfound: "No chapters found" })
        );
});

// Chapter Show
router.get("/:id", (req, res) => {
    Chapter.findById(req.params.id)
        .then((chapter) => res.json(chapter))
        .catch((err) =>
            res.status(404).json({ nochapterfound: "No chapter found with that ID" })
        );
});

// Chapter Create
router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateChapterInput(req.body);

        if (!isValid) {
            return res.status(404).json(errors);
        }

        const newChapter = new Chapter({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        });

        newChapter.save().then((chapter) => res.json(chapter));
    }
);

// Chapter Delete
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Chapter.findOneAndDelete({ id: req.params.id }).catch((err) => res.status(404).json({ nochapterfound: 'No chapter found with that ID' }))

        res.json({ success: true })
    }
)

// Chapter Edit
router.patch('/:id', passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateChapterInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        Chapter.findById(req.params.id)
            .then(chapter => {
                chapter.title = req.body.title;
                chapter.description = req.body.description;
                chapter.content = req.body.content;

                return chapter.save().then(chapter => res.json(chapter)).catch(err => console.log(err))
            })
            .catch(err => res.status(404).json({ nochapterFound: "No chapter found with that ID" }))
    });

module.exports = router;