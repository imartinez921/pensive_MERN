const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  sex: {
    type: String,
    require: true,
  },
  height: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  species: {
    type: String,
    require: true,  
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