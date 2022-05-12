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
        let a = await Client.find((c) => { c.passowrd == req.passowrd && c.email==req.email });
        if(a === null)
            return res.send("משתמש לא קיים")
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e); 
    }
}

module.exports = {
    addClient, getClientByPassowrd,get
}