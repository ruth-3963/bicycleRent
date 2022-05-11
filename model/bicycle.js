const mongoose = require("mongoose");

const BicycleSchema = new mongoose.Schema({
    Id: String,
    place: String,
    status: Boolean
})
const Bicycle = mongoose.model("bicycle", BicycleSchema);
module.exports = {
    BicycleSchema,
    Bicycle
}