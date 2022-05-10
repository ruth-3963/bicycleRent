const mongoose = require("mongoose");

const RentingSchema = new mongoose.Schema({
    Id: String,
    client_Id: { type: mongoose.Types.ObjectId, ref: "client" },
    bicycle_Id: { type: mongoose.Types.ObjectId, ref: "bicycle" },
    date_rent: Date,
    start_time: Date,//שעה
    end_time: date,//שעה
    source_place: String
})
const Renting = mongoose.model("renting", RentingSchema);
module.exports = {
    RentingSchema,
    Renting
}