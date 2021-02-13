const mongoose = require("mongoose");

const ufRegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: "Please Enter User name",
  },
  dateRegister: {
    type: String,
  },
  fname: {
    type: String,
    required: "Please Enter first name",
  },
  lname: {
    type: String,
  },
  gender: String,
  birthDate: String,
  phoneNum: String,
  ward: String,
  uniqID: String,
  niN: {
    type: String,
  },
  ufActivity: [{
    type: String
  }],

});

module.exports = mongoose.model("ufRegister", ufRegisterSchema);
