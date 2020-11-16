let Client = require("../models/Client");

class ClientsService {
  async getAllClients() {
    let allClients;
    await Client.module.find({}, function (err, clients) {
      if (err) return console.log(err);
      allClients = clients;
    });
    return allClients;
  }
}

// Client.module.deleteMany({},(err, result)=>{
//     if(err) return console.log(err);
//     console.log(result);
// })
// res.json({"message": `delete Data`})
module.exports = new ClientsService();
