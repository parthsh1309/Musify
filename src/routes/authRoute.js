const router = require("express").Router();

const authController = require('../controllers/authController');

router.get("/", authController.auth);

router.get("/callback",authController.authCallback);

module.exports = router;
