const express = require("express");
const router = express.Router();
// const passport = require('passport');
const  fs = require('fs'); 
const multer = require('multer');
const productRegister = require("../models/productModels");
const path = require('path');

//Setting image upload storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:(req, file, cb)=>{
      cb(null, file.fieldname + '-' + Date.now() + 
      path.extname(file.originalname));
    }
  });
  
  //Image upload
  const upload = multer({
    storage: storage,
  }).single('pdtImage');
  
  //


  router.get("/productRegistration", (req, res) => {
    res.render("productRegister", { title: "UFarm Product Registration" });
  });
  


  /////save data to db - make sure to edit here
  router.post('/productRegistration', upload, async(req,res) =>{
      try{
          const items = new productRegister(req.body);
          items.pdtImage = req.file.filename;
          await items.save() 
          res.redirect('productList')
      }
      catch(err) {
          res.status(400).send('Sorry! Something went wrong')
          console.log(err)
      }
  });

  router.get("/productList", async (req, res) => {
    try{
      let items = await productRegister.find()
      res.render("ufDash", { title: "Registered product",items: items });

    } catch (err) {
      res.status(400).send("Unable to find product details in database")
    }
   
  });

router.get('/shop', async (req, res) => {
  try {
    const status = await productRegister.find({status: 'Approved'})
    res.render('newHP', {items:status}) 
  } catch (err) {
    res.status(400).send("Unable to find product")
  }
})



  















module.exports = router;
