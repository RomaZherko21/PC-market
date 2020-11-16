const express = require("express");
const clientsRouter = express.Router();

const ClientsController = require("../controllers/clients.controller");

clientsRouter.get("/", ClientsController.getClients);
clientsRouter.get("/:id", ClientsController.getClientProfile);

module.exports = clientsRouter;
