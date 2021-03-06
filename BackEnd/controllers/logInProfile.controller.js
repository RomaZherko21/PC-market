const LogInProfileService = require('../services/logInProfile.service');

class LogInProfileController {
  postNewUser(req, res) {
      LogInProfileService.registrateClient(req.body, res)
  }
  getUser(req,res){
    LogInProfileService.logInProfile(req.query, res)
  }
  putUser(req){
    LogInProfileService.putNewProfile(req.body)
  }
}

module.exports = new LogInProfileController();
