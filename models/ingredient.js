const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema (
    {
    name: String,
    region: String,
    },
  );

module.exports = mongoose.model("Ingredient", ingredientSchema);