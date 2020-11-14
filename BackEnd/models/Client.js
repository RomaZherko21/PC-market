const { Schema, model, Types } = require("mongoose");

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    surname: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    adress: {
      type: String,
      required: true,
      unique: false,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { versionKey: false }
);
const Client = model("Client", clientSchema);
exports.module = Client;