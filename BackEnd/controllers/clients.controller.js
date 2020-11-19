//service служит для контакта с БД и отправки полученных данных в контроллер
const ClientsService = require("../services/clients.service");

let allClients;
async function allUsers() {
  allClients = await ClientsService.getAllClients();
}
allUsers();

class ClientsController {
  async getClients(req, res) {
    let { count, page } = req.query;
    let responseClients = [];
    for (let i = count * (page - 1); i < count * page; i++) {
      if (allClients[i]) responseClients.push(allClients[i]);
    }
    res.json({ clients: responseClients });
  }
  async getClientProfile(req, res) {
    let profile = {};
    profile = allClients.find((item) => {
      if (item._id == req.params.id) return item;
    });
    res.json({ clientProfile: profile });
  }
}

module.exports = new ClientsController();
