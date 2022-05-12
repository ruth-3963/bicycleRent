const express = require("express");
const mongoose = require("mongoose");
//יבוא כל העמודים
const ClientRout = require("./routing/client");
const BicycleRout = require("./routing/bicycle");
const RentingRout = require("./routing/client");

const app = express();

mongoose.connect("mongodb://localhost:27017/bicycleRent")
    .then(succ => console.log("mongo db connected "))
    .catch(err =>
        console.log(err)
    )

app.use(express.json())
app.use("/client", ClientRout)
app.use("/bicycle", BicycleRout)
app.use("/renting", RentingRout)
app.listen(4500, () => { console.log("waiting") })