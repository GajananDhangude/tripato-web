const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js")


router.post("/register" , AuthController.registerUser);
router.post("/login" , AuthController.LoginUser)
router.get("/logout" , AuthController.LogoutUser)

module.exports = router;