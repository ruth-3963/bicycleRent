const Bicycle = require("../model/bicycle").Bicycle;

const addBicycle = async (req, res) => {
    try {
        let a = new Bicycle(req.body)
        await a.save();
        return res.status(200).send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const removeBicycle = async (req, res) => {
    try {
        let a = await Bicycle.remove((b) => { b.id == req.id });
        await a.save();
        return res.status(200).send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const updateBicycleStatus = async (req, res) => {
    try {
        let b = await Bicycle.find((b) => { b.id == req.id });
        b.status=!b.status;
        await b.save();
        return res.status(200).send(b);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const updateBicyclePlace = async (req, res) => {
    try {
        let b = await Bicycle.find((b) => { b.id == req.id });
        b.source_place=!b.source_place;
        await b.save();
        return res.status(200).send(b);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const getAllBicycleById = async (req, res) => {
    try {
        let a = await Bicycle.find((b) => { b.id == req.id });
        return res.status(200).send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const getAllBicycle = async (req, res) => {
    try {
        let a = await Bicycle.find({});
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

module.exports = {
    getAllBicycle, getAllBicycleById,updateBicycleStatus,
    updateBicyclePlace,addBicycle,removeBicycle
}