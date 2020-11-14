const express = require('express');
const logInProfileRouter = express.Router();

const LogInProfileController = require("../controllers/logInProfile.controller");

logInProfileRouter.get('/',LogInProfileController.getLog)


module.exports = logInProfileRouter;