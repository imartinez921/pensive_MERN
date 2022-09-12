const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "books",
  }
});

const Character = mongoose.model("characters", CharacterSchema);
module.exports = Character;