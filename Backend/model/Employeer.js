const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const EmployeerSchema = new Schema({
  companyname: {
    type: String,
    maxlength: 255,
    minlength: 0,
    required: true,
  },
  password: {
    type: String,
    maxlength: 255,
    minlength: 4,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: async function (value) {
        if (await mongoose.models.Employeer.findOne({ email: value })) {
          return false;
        }
        return true;
      },
      message: "Email already exists",
    },
  },
  phone: {
    type: Number,
    maxlength: 11,
    minlength: 6,
    required: true,
  },
  companyindustry: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "employeer",
  },
});

module.exports = mongoose.model("Employeer", EmployeerSchema);
