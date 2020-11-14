const express = require("express");
const router = express.Router();

const clientsRouter = require("./clients.routes");
const productsRouter = require("./products.routes");
const logInProfileRouter = require("./logInProfile.routes");

router.use("/products", productsRouter);

router.use("/clients", clientsRouter);

router.use("/logInProfile", logInProfileRouter);

router.use("/", (req,res)=>{
    res.send('MAIN PAGE')
});

module.exports = router;
