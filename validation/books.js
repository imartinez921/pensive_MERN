const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBookInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (!Validator.isLength(data.title, { min: 1, max: 50})) {
    errors.title = "Title must be between 1 & 50 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  data.editor = validText(data.editor) ? data.editor : "";

  if (!Validator.isLength(data.editor, { min: 1, max: 10})) {
    errors.editor = "Editor must be between 1 & 10 characters";
  }

  if (Validator.isEmpty(data.editor)) {
    errors.editor = "Editor field is required";
  }
  

  data.genre = validText(data.genre) ? data.genre : "";

  if (!Validator.isLength(data.genre, { min: 1, max: 10})) {
    errors.genre = "Genre must be between 1 & 10 characters";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.genre = "Genre field is required";
  }


  data.description = validText(data.description) ? data.description : "";

  if (!Validator.isLength(data.description, { min: 1, max: 500})) {
    errors.description = "Description must be between 1 & 500 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};