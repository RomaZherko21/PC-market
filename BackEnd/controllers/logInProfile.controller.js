const LogInProfileService = require('../services/logInProfile.service');

class LogInProfileController {
  postNewUser(req, res) {
      LogInProfileService.registrateClient(req.body, res)
  }
  getUser(req,res){
    LogInProfileService.logInProfile(req.query, res)
  }
}

module.exports = new LogInProfileController();
