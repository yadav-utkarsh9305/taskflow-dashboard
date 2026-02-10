const express = require("express");
const userRoute = express.Router();
const { userRegister, logIn, showprofile } = require("../controllers/regController");
const auth = require("../middleware/auth");

userRoute.post("/register", userRegister);
userRoute.post("/login", logIn);
userRoute.get("/profile", auth, showprofile); // ✅ auth ONLY

module.exports = userRoute;
