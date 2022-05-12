const router = require("express").Router();
const clientController = require("../controller/login");

router.get("/", clientController.get);
router.get("/:name/:password", clientController.getClientByPassowrd);
router.post("/register", clientController.addClient);

module.exports = router;
