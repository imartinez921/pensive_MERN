const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Character = require("../../models/Character");
const validateCharacterInput = require("../../validation/characters");





router.get("/book/:book_id", (req, res) => {
  Character.find({bookId: req.params.book_id })
    .then((characters) => res.json(characters))
    .catch((err) =>
      res.status(404).json({ nocharactersfound: "No characters found from that book" })
    );
});

router.get("/:id", (req, res) => {
  Character.findById(req.params.id)
    .then((character) => res.json(character))
    .catch((err) =>
      res.status(404).json({ nocharacterfound: "No character found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCharacterInput(req.body);

    if (!isValid) {
      return res.status(404).json(errors);
    }
    const newCharacter = new Character({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      height: req.body.height,
      weight: req.body.weight,
      species: req.body.species,
      description: req.body.description,
      bookId: req.body.bookId
    });


    newCharacter.save().then((character) => res.json(character));
  }

);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => { 
    Character.findOneAndDelete({id: req.params.id}).catch((err) =>res.status(404).json({ nocharacterfound: 'No character found with that ID' }))
    
    res.json({ success: true }) 
  }
)

router.patch('/:id', passport.authenticate("jwt", { session: false }),
(req, res) => {
  const { errors, isValid } = validateCharacterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Character.findById(req.params.id)
    .then(character => {
      character.name = req.body.name;
      character.age = req.body.age;
      character.sex = req.body.sex; 
      //I modified this from book
      character.bookId = req.bookId.id;
      character.height= req.body.height;
      character.weight = req.body.weight;
      character.species = req.body.species;
      character.description= req.body.description;
        return character.save().then(character => res.json(character)).catch(err => console.log(err))
      })
        .catch(err => res.status(404).json( { nocharacterFound: "No character found with that ID"} ))
});



module.exports = router;