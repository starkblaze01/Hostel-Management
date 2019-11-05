const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StaffSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = Staff = mongoose.model("staff", StaffSchema);
