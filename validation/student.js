const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateStudentInput(data) {
  const errors = {};
  const genders = ['MALE', 'FEMALE']
  
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field is Required";
  }

  if (Validator.isEmpty(data.batch)) {
    errors.batch = "Batch is required";
  }

  if(genders.includes(data.genders)) {
    errors.gender = "Invalid gender";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
