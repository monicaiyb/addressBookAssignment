const express = require("express");
const router = express.Router();
const passport = require("passport");
const LoginModels = require("../models/LoginModels");
const addRegister = require("../models/regModels");

// /// Router for AO dashboard
// router.get("/aoDash", (req, res) => {
//   res.render("newFOP");
// });

//route for signup forms
// router.get("/signup", (req, res) => {
//   res.render("addBook", { title: "Create new address" });
// });

// //Save data the database
// router.post("/signup", async (req, res) => {
//   try {
//     const items = new LoginModels(req.body);
//     await LoginModels.register(items, req.body.password, (err) => {
//       if (err) {
//         throw err;
//       }
//       res.redirect("/signup");
//     });
//   } catch (error) {
//     res.status(400).send("Hello try again.");
//     console.log(error);
//   }
// });

// //route for farmer registration form forms
// router.get("/foRegistration", (req, res) => {
//   res.render("foRegister", { title: "FO registration form" });
// });

//route for signup forms
router.get("/addphone", (req, res) => {
  res.render("addBook", { title: "Create new address" });
});

//Save data the database
router.post("/addphone", async (req, res) => {
  try {
    const userdetails = new LoginModels(req.body);
    const user = new addRegister(req.body);
    user.save();
    await LoginModels.register(userdetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/addphone");
    });
  } catch (error) {
    res.status(400).send("Hello try again.");
    console.log(error);
  }
});

// retrieve data from the database
router.get("/foprofiles", async (req, res) => {
  if (req.session.user) {
    try {
      let user = await addRegister.find();
      // if (req.query.gender) {
      //   user = await addRegister.find({ gender: req.query.gender });
      // }
      res.render("aoDash", {
        title: "Phone Book",
        users: user,
        currentUser: req.session.user,
      });
    } catch (err) {
      res.status(400).send("Unable to find items in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/signup");
  }
});
///// delete
router.post("/delete", async (req, res) => {
  if (req.session.user) {
    try {
      await foRegister.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/signin");
  }
});

//update data fields
router.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateUser = await foRegister.findOne({ _id: req.params.id });
      res.render("foprofileUpdate", { user: updateUser });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/signin");
  }
});

router.post("/update", async (req, res) => {
  if (req.session.user) {
    try {
      await foRegister.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("foProfiles");
    } catch (err) {
      res
        .status(404)
        .send("Unable to update Farmer one profile in the database");
    }
  } else {
    console.log("Can't Farmer profile details");
    res.redirect("/signin");
  }
});

module.exports = router;
