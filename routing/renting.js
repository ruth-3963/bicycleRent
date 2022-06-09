const router = require("express").Router();
const rentingController = require("../controller/renting");

router.get("/getAllBicycleRenting", rentingController.getAllBicycleRenting);
router.get("/getTimeOfRent", rentingController.getTimeOfRent);
router.post("/addRenting", rentingController.addRenting);

module.exports = router;
