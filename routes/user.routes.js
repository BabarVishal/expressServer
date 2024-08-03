const express = require("express");
const { loginControllers } = require("../Controllers/user.controllers");

const router = express.Router();

router.get("/login", loginControllers);


module.exports = router;