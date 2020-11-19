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
module.exports = new ClientsService();
