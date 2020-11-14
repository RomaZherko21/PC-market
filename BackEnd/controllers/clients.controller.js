//service служит для контакта с БД и отправки полученных данных в контроллер 
const ClientsService = require('../services/clients.service');

class ClientsController {
  getClients(req, res) {
    ClientsService.getClients()
    res.send("<h1>GET CLIENTS<h1/>");
  }

  // async getClient(req, res) {
  //   res.send("ID" + req.params["id"]);
  // }
}

module.exports = new ClientsController();
