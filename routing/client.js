const router = require("express").Router();
const clientController = require("../controller/login");

router.get("/", clientController.getClientByPassowrd);
router.post("/register", clientController.addClient);

module.exports = router;

