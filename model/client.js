 const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    Id:String,
    password:String,
    dateOfBirth:Date,
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