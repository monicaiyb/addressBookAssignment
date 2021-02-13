const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const loginRegisterSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
    },
    

    roles: String,
});

loginRegisterSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('LoginModels', loginRegisterSchema);
