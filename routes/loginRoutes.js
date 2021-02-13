const express = require("express");
const router = express.Router();
const passport = require('passport');
const LoginModels = require("../models/LoginModels")
const foModels = require("../models/foModels")
const aoModels = require("../models/regModels")




router.get("/signin", (req, res) => {
  res.render("signin", { title: "UFarm Sign in form" });
});

// Redirect Agricultural officer to registration forms/ admin panel

router.post('/signin', passport.authenticate('local', {failureRedirect:'/signin'}), (req,res) =>{
  req.session.user = req.user;
  const userRole = req.user.roles;
  if(userRole === 'officer'){
    res.redirect('/foprofiles');
  }
   else if(userRole == 'farmer'){
    res.redirect('/ufprofiles');
  }
   else if(userRole == 'urban farmer'){
    res.redirect('/productList');
   }
 
});






module.exports = router;
