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
  
  
// Client.module.deleteMany({},(err, result)=>{
//     if(err) return console.log(err);
//     console.log(result);
// })
// res.json({"message": `delete Data`})
  module.exports = new ClientsService();