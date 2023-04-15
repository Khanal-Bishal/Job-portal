const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Employeer = require("./Employeer");

const JobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    enum: ["frontend", "backend", "ui/ux", "sysadmin"],
    required: true,
    minlength: 1,
  },
  numberofvacancy: {
    type: Number,
    required: true,
    max: 9000000,
    min: 0,
  },
  requirements: {
    type: [String],
    minlength: 1,
    required: true,
  },
  offeredSalary: {
    type: Number,
    required: false,
  },
  created_at: {
    type: Date,
    required: false,
  },

  description: {
    type: String,
    required: false,
    maxlength: 1000,
  },
  image: {
    type: [String],
    required: false,
  },
  created_by: {
    type: Number,
    required: true,
    ref: Employeer,
  },
});

module.exports = mongoose.model("Job", JobSchema);
