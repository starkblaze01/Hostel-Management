const Validator = require("validator");
const isEmpty = require("./is-empty");
const mongoose = require("mongoose")

const validateCleanerInput = data => {
  const errors = {};

  if (Validator.isEmpty(data.cleaner)) {
    errors.cleaner = "Cleaner ID is missing";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateStudentInput = data => {
  const errors = {};

  if (!data.studentIds.length) {
    errors.studentId = "Student ID is missing";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateRoomInput = data => {
  const errors = {};
  const blocks = ['A', 'B', 'C', 'D'];
  const genders = ['BOY', 'GIRL'];

  const { id, block, gender } = data

  if (Validator.isEmpty(id)) {
    errors.id = "Room id is missing";
  }

  if (Validator.isEmpty(block) || !blocks.includes(block)) {
    errors.block = "Room block is missing or invalid";
  }

  if (Validator.isEmpty(gender) || !genders.includes(gender)) {
    errors.gender = "Gender is missing or invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = {
  validateCleanerInput,
  validateStudentInput,
  validateRoomInput
}
