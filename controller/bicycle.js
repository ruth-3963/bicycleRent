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
        let a = await Bicycle.findByIdAndRemove(req.body.id);
        await a.save();
        return res.status(200).send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
// שינוי הסטטוס בעת התחלת ההשכרה
const updateBicycleStatus = async (req, res) => {
    try {
        // let b = await Bicycle.find((b) => { b.id == req.id });
        // b.status=!b.status;
        let b1= await Bicycle.findByIdAndUpdate(req.body._id,req.body)
        await b1.save();
        return res.status(200).send(b1);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const updateBicyclePlace = async (req, res) => {
    try {       
        let b1= await Bicycle.findByIdAndUpdate(req.body._id,req.body)
        await b1.save();
        return res.status(200).send(b1);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const getBicycleById = async (req, res) => {
    try {
        let a = await Bicycle.findById(req.params.id);
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
    getAllBicycle, getBicycleById,updateBicycleStatus,
    updateBicyclePlace,addBicycle,removeBicycle
}