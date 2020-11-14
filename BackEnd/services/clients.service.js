let Client = require('../models/Client');

class ClientsService {
    getClients(req, res) {
      Client.module.find({}, function(err, clients){
        if(err) return console.log(err);
        console.log(clients);
    });
      console.log('service here')
    }
  }
  
  module.exports = new ClientsService();