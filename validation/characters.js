const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateCharacterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 1, max: 50})) {
    errors.name = "Name must be between 1 & 50 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  data.sex = validText(data.sex) ? data.sex : "";

  if (!Validator.isLength(data.sex, { min: 1, max: 10})) {
    errors.sex = "Sex must be between 1 & 10 characters";
  }

  if (Validator.isEmpty(data.sex)) {
    errors.sex = "Sex field is required";
  }

  data.species = validText(data.species) ? data.species : "";

  if (Validator.isEmpty(data.species)) {
    errors.species = "Species field is required";
  }

  data.description = validText(data.description) ? data.description : "";

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};