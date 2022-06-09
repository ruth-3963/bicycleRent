const mongoose = require("mongoose");

const BicycleSchema = new mongoose.Schema({
    lng:Number,
    lat:Number,
    status: Boolean
})
const Bicycle = mongoose.model("bicycle", BicycleSchema);
module.exports = {
    BicycleSchema,
    Bicycle
}