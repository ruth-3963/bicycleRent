const mongoose = require("mongoose");

const RentingSchema = new mongoose.Schema({
    client_Id: { type: mongoose.Types.ObjectId, ref: "client" },
    bicycle_Id: { type: mongoose.Types.ObjectId, ref: "bicycle" },
    start_time: Date,
    end_time: Date,
    source_place: String
})

const Renting = mongoose.model("renting", RentingSchema);
module.exports = {
    RentingSchema,
    Renting
}