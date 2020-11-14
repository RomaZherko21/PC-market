const express = require("express");
const clientsRouter = express.Router();

const ClientsController = require("../controllers/clients.controller");

clientsRouter.get("/", ClientsController.getClients);

module.exports = clientsRouter;
