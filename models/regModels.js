const mongoose = require("mongoose");

const phoneBookSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: "create ID",
  },
  
  fname: {
    type: String,
    required: "Please Enter first name",
  },
  lname: {
    type: String,
  },
  
  phoneNum: String,
});

module.exports = mongoose.model("addRegister", phoneBookSchema);
