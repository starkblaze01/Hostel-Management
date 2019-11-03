const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateStudentInput(data) {
  const errors = {};
  const genders = ['BOY', 'GIRL']
  
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.batch = !isEmpty(data.batch) ? data.batch : "";

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
