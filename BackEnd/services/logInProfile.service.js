let Client = require("../models/Client");

class LogInProfileService {
  registrateClient(client, res) {
    let user = new Client.module(client);
    user.save(function (err) {
      if (err) return res.json({ message: `You need unique email`, err:true });
      res.json({ message: `${client.mail} was saved`, err:false });
      console.log(`Client Saved:   ${client.mail}`);
    });
  }
  logInProfile(logInfo, res) {
    console.log(logInfo);
    Client.module.findOne(logInfo,(err, profile)=>{
        if(err || profile==null) return res.json({ message: `Wrong data (from server)` });
        res.json(profile);
        console.log(`Profile was sended:   ${profile.mail}`);
    })
  }
}


module.exports = new LogInProfileService();
