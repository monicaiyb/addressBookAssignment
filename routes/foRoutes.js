const express = require("express");
const router = express.Router();
const passport = require('passport');
const LoginModels = require("../models/LoginModels")
const ufRegister = require("../models/foModels");
const productRegister = require("../models/productModels");


//route for signup forms
router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign up form" });
});

//Save data the database
router.post("/signup", async (req, res) => {
  try {
    const items = new LoginModels(req.body);
    await LoginModels.register(items, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/signin");
    });
  } catch (error) {
    res.status(400).send("Hello try again.");
    console.log(error);
  }
});


//route for urban farmer registration form forms
router.get("/ufRegistration", (req, res) => {
  res.render("ufRegister", { title: "Urban Farmer registration form" });
});

//Save data the database
router.post("/ufRegistration", async (req, res) => {
  try {
    const userdetails = new LoginModels(req.body)
    const user = new ufRegister(req.body);
    user.save();
    await LoginModels.register(userdetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/ufprofiles");
    });
  } catch (error) {
    res.status(400).send("Hello try again.");
    console.log(error);
  }
});



// retrieve data from the database 
router.get('/ufprofiles', async (req, res) => {
  if (req.session.user) {
      try {
          let user = await ufRegister.find()
          if (req.query.gender) {
              user = await ufRegister.find({ gender: req.query.gender })
          }
          res.render('foDash', { title: 'Urban Farmer  Profiles', users: user, currentUser:req.session.user})
      } catch (err) {
          res.status(400).send("Unable to find items in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})
///// delete 
router.post('/delete', async (req, res) => {
  if (req.session.user) {
      try {
          await ufRegister.deleteOne({ _id: req.body.id })
          res.redirect('back')
      } catch (err) {
          res.status(400).send("Unable to delete item in the database");
      }
  }else {
          console.log("Can't find session")
          res.redirect('/signin')
      }
})

//update data fields
router.get('/ufupdate/:id', async (req, res) => {
  if (req.session.user) {
      try {
          const updateUser = await ufRegister.findOne({ _id:req.params.id })
          res.render('ufprofileUpdate', { user: updateUser })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})

router.post('/ufupdate', async (req, res) => {
if (req.session.user) {
  try {
      await ufRegister.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('ufProfiles');
  } catch (err) {
      res.status(404).send("Unable to update selected Urban Farmer detial in the database");
  } 
}else {
  console.log("Can't find Urban Farmer profile details")
  res.redirect('/signin')
}   
})

//verifying product

router.get('/verify/:id', async (req, res) => {
  if (req.session.user) {
      try {
          const updateItem = await productRegister.findOne({ _id:req.params.id })
          res.render('verify', {item: updateItem })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
  }else {
      console.log("Can't find session")
      res.redirect('/signin')
  }
})

router.post('/verify', async (req, res) => {
if (req.session.user) {
  try {
      await productRegister.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('ufProfiles');
  } catch (err) {
      res.status(404).send("Unable to verify product database");
  } 
}else {
  console.log("Can't find product verification ")
  res.redirect('/signin')
}   
})


//Verified Product list

router.get('/verifiedProductList', async (req, res) => {
  try {
    let item = await productRegister.find();
    if(req.query.type) {
      item = await productRegister.find(
        {
        type:req.query.type
      });
    }
      res.render('verifiedPdtList', {title: 'Product list', items:item, 
      currentUser:req.session.user});     
    } catch (err) {
      res.status(404).send("unable to find verified product");
    }
})










module.exports = router;
