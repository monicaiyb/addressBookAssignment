// Install express using npm install express --save
//Use express by requiring it
const express = require("express");
// require middleware body parsr
const bodyParser = require("body-parser");
//import mongoose
const mongoose = require("mongoose");
// Import/ rquire pug
const path = require("path");
//Install dotenv using npm install dotenv and require it
require("dotenv/config");

//Require Models
const LoginModels = require("./models/LoginModels")
// const Registration = require("./models/Registration");
// const foRegister = require("./models/foModels");
// const productRegister = require("./models/productModels");

///install express session using npm install body-parser express-session & Require express session
// const bodyParser = require('body-parser');
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

// require passportlocalMongoose-
const passportLocalMongoose = require("passport-local-mongoose");

// Install passport using npm install passport and require
const passport = require("passport");

///

// //requring router
// const router = express.Router();

//importing all routes, subsequently, use only the variable= loginRoutes
const loginRoutes = require("./routes/loginRoutes");

//Importing Agriculture officer  routes
const aoRoutes = require("./routes/aoRoutes");

//import product routes
const productRoutes = require("./routes/productRoutes");

//import Farmer One Routes
const foRoutes = require("./routes/foRoutes");

//Intantiate

const app = express();

//Install nodemon using npm install nodemon --save-dev & run npm run dev to trigger the nodemon
//connect mongoose using mongodb+srv://ekomens1:<password>@cluster0.mqp0h.mongodb.net/test
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

//DATABASE=mongodb://localhost:27017/cohort5
// We want to test if the mongoose connection is open or otherwise
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//install pug using npm install pug --save
// Set up pug/ view template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Install middleware - boyparser using npm install body-parser --savec
//setting up middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
///use passport session
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

///paspoort config
passport.use(LoginModels.createStrategy());
passport.serializeUser(LoginModels.serializeUser());
passport.deserializeUser(LoginModels.deserializeUser());

// //passport for foRegister
// passport.use(foRegister.createStrategy());
// passport.serializeUser(foRegister.serializeUser());
// passport.deserializeUser(foRegister.deserializeUser());

//connect to the public folder
app.use(express.static(path.join(__dirname, "public")));

//Use imported routes- Access all routes in the index routes through /
app.use('/', loginRoutes);
app.use( '/',aoRoutes);
app.use( '/',foRoutes);
app.use('/', productRoutes);

///log out
//logout
app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        // failed to destroy session
      } else {
        return res.redirect("/signin");
      }
    });
  }
});

// });
app.get("*", (req, res) => {
  res.send("error page");
});




// Server
app.listen(3000, () => {
  console.log("listening on 3000");
});
