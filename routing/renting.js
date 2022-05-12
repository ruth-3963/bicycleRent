const router = require("express").Router();
const rentingController = require("../controller/renting");

router.get("/getAllBicycleRenting", rentingController.getAllBicycleRenting);
router.post("/addRenting", rentingController.addRenting);

module.exports = router;
