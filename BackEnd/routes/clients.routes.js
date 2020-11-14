const express = require("express");
const clientsRouter = express.Router();

const ClientsController = require("../controllers/clients.controller");

clientsRouter.get("/", ClientsController.getClients);
clientsRouter.get("/client/:id", ClientsController.getClient);

module.exports = clientsRouter;
