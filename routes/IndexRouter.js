const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.js");

const AuthController = require("../controllers/AuthController");

router.get("/", AuthController.showLogin);
router.get("/registro", AuthController.showRegistro);
router.post("/registro", AuthController.registrar);
router.get("/home", AuthController.showHome);
router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);
module.exports = router;
