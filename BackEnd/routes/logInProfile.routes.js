const express = require('express');
const logInProfileRouter = express.Router();
const jsonParser = express.json();
const LogInProfileController = require("../controllers/logInProfile.controller");

logInProfileRouter.post('/registration',jsonParser, LogInProfileController.postNewUser);
logInProfileRouter.get('/logIn',jsonParser, LogInProfileController.getUser);

module.exports = logInProfileRouter;