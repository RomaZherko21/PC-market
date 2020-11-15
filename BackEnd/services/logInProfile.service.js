let Client = require("../models/Client");

class LogInProfileService {
  registrateClient(client, res) {
    let user = new Client.module(client);
    user.save(function (err) {
      if (err) return res.json({ message: `You need unique email` });
      res.json({ message: `${client.mail} was saved` });
      console.log(`Client Saved: ${client.mail}`);
    });
  }
  logInProfile(logInfo, res) {
    console.log(logInfo);
    Client.module.findOne(logInfo,(err, profile)=>{
        if(err || profile==null) return res.json({ message: `Wrong data` });
        res.json(profile);
        console.log(`${profile.mail} was sended`);
    })
  }
}

// Client.module.deleteMany({},(err, result)=>{
//     if(err) return console.log(err);
//     console.log(result);
// })
// res.json({"message": `delete Data`})

module.exports = new LogInProfileService();
