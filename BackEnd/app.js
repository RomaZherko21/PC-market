const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");

const app = express();

const HOST = "localhost";
const PORT = 5000;
const mongoURI =
  "mongodb+srv://Roma:1234@users.rxe8i.mongodb.net/users?retryWrites=true&w=majority";

app.use("/", router);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, HOST, () => {
  console.log(`server has been started on port ${PORT}`);
});
