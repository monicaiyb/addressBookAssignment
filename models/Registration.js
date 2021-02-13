const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const registrationSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: 'Please Enter first name'
    },
    lname: {
        type: String,
      },

    username:{
        type: String,
        unique: true,
        required: 'Please Enter User name'
      },
    email: {
      type: String,
    },

    // password: {
    //     type: String,
    //     required: 'Please Enter password'
    //   },
  });
  
  registrationSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('Registration', registrationSchema);