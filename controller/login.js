const Client = require("../model/client").Client;

const addClient = async (req, res) => {
    try {
        let a = new Client(req.body)
        await a.save();
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getClientByPassowrd = async (req, res) => {
    try {
        let a = await Client.find({password: req.query.password, email:req.query.email});
        if(a.length === 0)
            return res.send("משתמש לא קיים")
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e); 
    }
}

module.exports = {
    addClient, getClientByPassowrd
}