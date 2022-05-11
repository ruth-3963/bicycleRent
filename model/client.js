 const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    Id:String,
    dateOfBirth:Date,
    status:Boolean,
    num_of_credit:String,
    cvv:String,
    validity:Date,
    email:String
})
const Client = mongoose.model("client", ClientSchema);
module.exports = {
    ClientSchema,
    Client
}