const { Schema, model, Types } = require("mongoose");

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    age: {
      type: Number,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    male: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { versionKey: false }
);
const Client = model("Client", clientSchema);

// const client = new Client({
//   name: "ROMAa",
//   age: 50,
//   email: "Ro@inasaasdasdasdd.ruasd",
//   male: 'man',
// });

// client.save(function (err) {
//   if (err) return console.log(err);
//   console.log("Сохранен объект", client);
// });



class ClientsService {
    getClients(req, res) {
      console.log('service here')
    }
  }
  
  module.exports = new ClientsService();