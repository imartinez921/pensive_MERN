const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  species: {
    type: String
  },
  description: {
    type: String,
    require: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "books",
  }
});

const Character = mongoose.model("characters", CharacterSchema);
module.exports = Character;