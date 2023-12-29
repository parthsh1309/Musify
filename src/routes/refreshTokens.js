const router = require("express").Router();

const { clientId, clientSecret } = require("../../config/api.config");
const request = require("request");
const refreshTokensController = require("../controllers/refreshtokensController");


router.get("/", refreshTokensController.refreshToken);

module.exports = router;
