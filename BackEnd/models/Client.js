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

module.export = model("Client", clientSchema);
