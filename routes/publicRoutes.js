const express = require("express");
const router = express.Router();
const passport = require('passport');
const LoginModels = require("../models/LoginModels")
const ufRegister = require("../models/foModels");
const productRegister = require("../models/productModels");