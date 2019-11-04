const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function staffValidation(data) {
  const errors = {};
  
  data.name = !isEmpty(data.name) ? data.name : "";
  data.occupation = !isEmpty(data.occupation) ? data.occupation : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = "Staff occupation is required";
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Staff mobile is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
