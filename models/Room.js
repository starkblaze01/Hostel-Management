const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      
    }
  ],
  block: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],
    required: true,
    trim: true
  },
  cleaner: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    required: true,
  }
});

module.exports = Student = mongoose.model("room", RoomSchema);
