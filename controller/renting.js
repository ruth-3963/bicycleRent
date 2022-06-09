const Rent = require("../model/renting").Renting;

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
        let a = await Rent.find({});
    console.log(a)
        return res.send(a)
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getTimeOfRent = async (req, res) => {
    try {
      let a = await Rent.find(req.params.id);
      console.log(a);
      return res.send(a);
    } catch (e) {
      return res.status(400).send(e);
    }
  };

module.exports = {
    addRenting,getAllBicycleRenting,getTimeOfRent
}