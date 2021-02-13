const mongoose = require("mongoose");

const productRegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    // unique: true,
    required: "Please Enter User name",
  },
  
  pdtName: {
    type: String,
  },
  pdtImage: {
    type: String,
  },
  pdtType: String,
  unitPrice: String,
  qty: String,
  ward: String,
  payment: String,
  status: String,
  phoneNum: String,
  email: String,
  delivery:String,
  dirHome: String,

});

module.exports = mongoose.model("productRegister", productRegisterSchema);
