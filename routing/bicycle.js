const router = require("express").Router();
const bicycleController = require("../controller/bicycle");

router.get("", bicycleController.get);
router.get("/:id", bicycleController.getAllBicycleById);
router.post("/addBicycle", bicycleController.addBicycle);
router.delete("/removeBicycle", bicycleController.removeBicycle);
router.put("/updateBicyclePlace", bicycleController.updateBicyclePlace);
router.put("/updateBicycleStatus", bicycleController.updateBicycleStatus);

module.exports = router;
