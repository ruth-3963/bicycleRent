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
    console.log(req.params)
    try {
        let a = await Client.find({password: req.params.password, email:req.params.email});
        // let a = await Client.find((c)=>{c.password == req.params.password && c.email ==req.params.email});
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