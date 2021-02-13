const express = require("express");
const router = express.Router();
const passport = require("passport");

// Login
router.get('/login',(req,res) =>{
  res.render('login',{title: ' Login'})
});
//process the username and password that are submitted in the login page
router.post('/login', passport.authenticate('local', {failureRedirect:'/login'}), (req,res) =>{
  req.session.user = req.user;
  const userRole = req.user.role;
  if(userRole == 'farmerone'){
    res.redirect('/urbanfarmerlist');
  }
   else if(userRole == 'urbanfarmer'){
    res.redirect('/productlist');
  }
   else if(userRole == 'officer'){
    res.redirect('/farmeronelist');
   }
 
});

module.exports = router;