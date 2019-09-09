const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbSchema = new Schema({
  title: { type: String, required: true }
});

const Db = mongoose.model("Db", dbSchema);

module.exports = Db;
