const express = require('express');
const router = express.Router();
const passport = require('passport');

// gets and displays a login page
router.get('/signin', (req, res) => {
    res.render('signin', { title: 'Signin form' })
})

//process the username and password that are submitted in the login page
router.post('/signin', passport.authenticate('local'), (req,res) =>{
    // you can use the try and catch
    req.session.user = req.user;
    res.redirect('/userlist');
})

module.exports = router;