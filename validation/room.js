const Validator = require("validator");
const isEmpty = require("./is-empty");
const mongoose = require("mongoose")

const validateRoomInput = data => {
  const errors = {};
  const blocks = ['A', 'B', 'C', 'D'];
  const genders = ['BOY', 'GIRL'];
  const work = ['CLEANING', 'REPAIR'];
  const { id, block, gender, type, incharge, time } = data

  data.id = !isEmpty(data.id) ? data.id : "";
  data.block = !isEmpty(data.block) ? data.block : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.incharge = !isEmpty(data.incharge) ? data.incharge : "";
  data.time = !isEmpty(data.time) ? data.time : "";


  if (Validator.isEmpty(id)) {
    errors.id = "Room id is missing";
  }

  if (Validator.isEmpty(block) || !blocks.includes(block)) {
    errors.block = "Room block is missing or invalid";
  }

  if (Validator.isEmpty(gender) || !genders.includes(gender)) {
    errors.gender = "Occupancy is missing or invalid";
  }

  if (Validator.isEmpty(type) || !work.includes(type)) {
    errors.type = "Action Missing or Invalid";
  }
  if (Validator.isEmpty(incharge)) {
    errors.incharge = "Incharge Name Required";
  }
  if (Validator.isEmpty(time)) {
    errors.time = "Date and Time Required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = {
  validateRoomInput
}
