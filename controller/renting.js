const Rent = require("../model/renting").Rent;

const addRenting = async (req, res) => {
    try {
        let a = new Rent(req.body)
        await a.save();
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getAllBicycleRenting = async (req, res) => {
    try {
        let a = await Client.find();
        return res.send(a)
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

module.exports = {
    addRenting,getAllBicycleRenting
}